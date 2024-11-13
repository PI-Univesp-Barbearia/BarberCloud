import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './agenda.css'


function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Horários disponíveis (exemplo)
  const availableTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  // Função para lidar com a seleção de uma data
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reseta o horário selecionado ao escolher uma nova data
  };

  // Função para lidar com a seleção de um horário
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Função para confirmar o agendamento
  const handleConfirm = () => {
    if (selectedTime) {
      alert(`Agendamento confirmado para ${selectedDate.toLocaleDateString()} às ${selectedTime}`);
      // Aqui você pode enviar os dados do agendamento para o backend, por exemplo
    } else {
      alert('Por favor, selecione um horário.');
    }
  };

  return (
    <div className="schedule-page">
      <h2>Agendar um Horário</h2>

      <div className="calendar-container">
        <h3>Escolha uma data:</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date()} // Impede a seleção de datas passadas
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
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleConfirm} className="confirm-button">
        Confirmar Agendamento
      </button>
    </div>
  );
}

export default SchedulePage;
