document.addEventListener("DOMContentLoaded", function() {
    // Enable Day.js plugins
    dayjs.extend(dayjs_plugin_utc);
    dayjs.extend(dayjs_plugin_timezone);

    MicroModal.init();
  
    // Function to update the time and date
    function updateTimeAndDate() {
      // Get the current timezone using Day.js
      const currentTimezone = dayjs.tz.guess();
      const currentTime = dayjs().format('h:mm:ss A');
      const currentDate = dayjs().format('dddd, MMMM D YYYY');
  
      // Update the HTML elements with the current timezone, time, and date
      document.getElementById('timezone').textContent = currentTimezone;
      document.getElementById('time').textContent = currentTime;
      document.getElementById('date').textContent = currentDate;
    }
  
    // Initial update
    updateTimeAndDate();
  
    // Update the time and date every second (1000 milliseconds)
    setInterval(updateTimeAndDate, 1000);
  });


  document.getElementById('timezoneButton').addEventListener('click', function() {
    MicroModal.show('modal-1');
  });

  document.getElementById('modal-1').addEventListener('click', function(event) {
    if (event.target.classList.contains('modal__btn')) {
      const selectedTimezone = document.getElementById('timezoneSelect').value;
      document.getElementById('timezone').textContent = selectedTimezone;
      MicroModal.close('modal-1');
    }
  });
  