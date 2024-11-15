import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './agenda.css';
import { db, auth } from '../Config/firebase';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(''); // Para capturar o nome do usuário
  const [phone, setPhone] = useState(''); // Para capturar o telefone do usuário
  const navigate = useNavigate();

  const availableTimes = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

  const isDayAllowed = (date) => {
    const day = date.getDay();
    return day >= 1 && day <= 6;
  };

  const handleDateChange = (date) => {
    if (isDayAllowed(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
      fetchUnavailableTimes(date);
    } else {
      alert('Selecione um dia entre segunda e sábado.');
    }
  };

  const fetchUnavailableTimes = async (date) => {
    const dateString = date.toLocaleDateString();
    const q = query(
      collection(db, 'Agendamentos'),
      where('data', '==', dateString)
    );
    
    const querySnapshot = await getDocs(q);
    const times = querySnapshot.docs.map((doc) => doc.data().hora);
    setUnavailableTimes(times);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = async () => {
    if (selectedTime && user) {
      if (!name || !phone) {
        alert("Por favor, preencha seu nome e telefone.");
        return;
      }

      const appointmentData = {
        clienteID: user.uid,
        nome: name,
        telefone: phone,
        email: user.email,
        data: selectedDate.toLocaleDateString(),
        hora: selectedTime,
      };

      try {
        await addDoc(collection(db, 'Agendamentos'), appointmentData);
        alert(`Agendamento confirmado para ${selectedDate.toLocaleDateString()} às ${selectedTime}`);
        fetchUnavailableTimes(selectedDate);
      } catch (error) {
        console.error("Erro ao agendar: ", error);
        alert("Erro ao realizar o agendamento. Tente novamente.");
      }
    } else {
      alert('Por favor, selecione um horário e faça login.');
    }
  };

  const handleLogout = () => {
    navigate('/app');
  };

  const isTimeUnavailable = (time) => {
    return unavailableTimes.includes(time);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    fetchUnavailableTimes(selectedDate);
    
    return () => unsubscribe();
  }, [selectedDate]);

  return (
    <div className="schedule-page">
      <button onClick={handleLogout} className="logout-button">Sair</button>
      
      <h2>Agende seu horario na BarberCloud</h2>

      <div className="calendar-container">
        <h3>Escolha uma data:</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date()}
          tileDisabled={({ date }) => !isDayAllowed(date)}
        />
      </div>

      <div className="time-slots">
        <h3>Escolha um horário:</h3>
        <div className="time-buttons">
          {availableTimes.map((time) => (
            <button
              key={time}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
              disabled={isTimeUnavailable(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="user-info">
        <h3>Confirme seu nome e seu telefone para entrarmos em contato, se necessário!</h3>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button onClick={handleConfirm} className="confirm-button mt-3">
        Confirmar Agendamento
      </button>
    </div>
  );
}

export default SchedulePage;
