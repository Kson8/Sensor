function handleOrientation(event) {
            document.getElementById('alpha').textContent = event.alpha.toFixed(2);
            document.getElementById('beta').textContent = event.beta.toFixed(2);
            document.getElementById('gamma').textContent = event.gamma.toFixed(2);
        }

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation);
        } else {
            document.querySelector('.sensor-data').textContent = "DeviceOrientation not supported.";
        }
