import React, { Component } from 'react';
import './Clock.scss';
import calendarIcon from '../../assets/icons/calendar-icon.svg';

class Clock extends Component {
  state = {
    hour: '',
    minutes: '',
    seconds: '',
    date: '',
    month: '',
    year: '',
    day: '',
  };

  componentDidMount() {
    setInterval(() => {
      const today = new Date();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      let date = today.getDate();
      let month = today.getMonth();
      let year = today.getFullYear();
      let day = today.getDay();

      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      const weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];

      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      weekDays.map((weekDay, index) => {
        if (index + 1 === day) {
          day = weekDay;
        }
        return day;
      });

      monthNames.map((monthName, index) => {
        if (index === month) {
          month = monthName;
        }
        return month;
      });

      this.setState({
        hour,
        minutes,
        seconds,
        date,
        month,
        year,
        day,
      });
    }, 1000);
  }

  render() {
    let hour = this.state.hour;
    let time = (
      <h2>
        {hour} : {this.state.minutes} : {this.state.seconds} am
      </h2>
    );

    if (hour > 12) {
      hour -= 12;
    }

    if (this.state.hour >= 12) {
      time = (
        <h2>
          {hour} : {this.state.minutes} : {this.state.seconds} pm
        </h2>
      );
    }

    const mode = localStorage.getItem('mode');
    let classes = 'time-container';

    if (mode === 'true') {
      classes += ' dark';
    }

    return (
      <div className={classes}>
        <div className='clock-and-time-container'>
          <div className='clock-container'>{time}</div>
          <div className='date-container'>
            <img className='icon' src={calendarIcon} alt='calendar-icon' />
            <p>
              {this.state.day}, {this.state.date} {this.state.month}{' '}
              {this.state.year}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
