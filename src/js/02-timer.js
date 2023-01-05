import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timerID = null;
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    clearInterval(timerID);

    if (selectedDates[0] - Date.now() > 1000) {
      btnStart.removeAttribute('disabled');
      selectedDate = selectedDates[0];
    } else {
      // window.alert('Please choose a date in the future');
      Notify.failure('Please choose a date in the future');
    }
  },
};
