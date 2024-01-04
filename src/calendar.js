import React, { useState } from 'react';
import moment from 'moment';
import './Calendar.css';

const DayNames = () => (
  <div className="row day-names">
    <span className="day">S</span>
    <span className="day">M</span>
    <span className="day">T</span>
    <span className="day">W</span>
    <span className="day">T</span>
    <span className="day">F</span>
    <span className="day">S</span>
  </div>
);

const Day = ({ day, select, selected }) => {
  const { date, isCurrentMonth, isToday, number } = day;

  return (
    <span
      key={date.toString()}
      className={`day${isToday ? ' today' : ''}${isCurrentMonth ? '' : ' different-month'}${date.isSame(selected) ? ' selected' : ''}`}
      onClick={() => select(day)}
    >
      {number}
    </span>
  );
};

const Week = ({ date, month, selected, select }) => {
  let days = [];

  for (let i = 0; i < 7; i++) {
    const day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), 'day'),
      date: date,
    };

    days.push(<Day key={date.toString()} day={day} selected={selected} select={select} />);

    date = date.clone();
    date.add(1, 'day');
  }

  return <div className="row week">{days}</div>;
};

const Calendar = () => {
  const [state, setState] = useState({
    month: moment(),
    selected: moment().startOf('day'),
  });

  const previous = () => {
    setState((prevState) => ({
      ...prevState,
      month: prevState.month.clone().subtract(1, 'month'),
    }));
  };

  const next = () => {
    setState((prevState) => ({
      ...prevState,
      month: prevState.month.clone().add(1, 'month'),
    }));
  };

  const select = (day) => {
    setState((prevState) => ({
      selected: day.date,
      month: day.date.clone(),
    }));
  };

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = state.month.clone().startOf('month').add('w' - 1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = state;

    while (!done) {
      weeks.push(<Week key={date.toString()} date={date.clone()} month={month} select={(day) => select(day)} selected={selected} />);

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const renderMonthLabel = () => {
    const { month } = state;
    return <span className="month-label">{month.format('MMMM YYYY')}</span>;
  };

  return (
    <section className="calendar">
      <header className="header">
        <div className="month-display row">
          {renderMonthLabel()}
          <i className="arrow fa fa-angle-left" onClick={previous} />
          <i className="arrow fa fa-angle-right" onClick={next} />
        </div>
        <DayNames />
      </header>
      {renderWeeks()}
    </section>
  );
};

export default Calendar;
