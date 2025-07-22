/*Image Section*/
document.getElementById("resume").addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(this);
      const photoFile = document.getElementById("photo").files[0];

      const reader = new FileReader();
      reader.onload = function () {
        const base64Image = encodeURIComponent(reader.result);
        const params = new URLSearchParams();

        formData.forEach((value, key) => {
          if (Array.isArray(value)) {
            value.forEach(v => params.append(key + "[]", v));
          } else {
            params.append(key, value);
          }
        });

        params.append("photo", base64Image);

        window.location.href = "resume.html?" + params.toString();
      };

      if (photoFile) {
        reader.readAsDataURL(photoFile);
      }
    });







/*Hobby Section*/
function addHobby() {
      const container = document.getElementById("hobbies-container");
      const input = document.createElement("input");
      input.className = "hobby-input";
      input.type = "text";
      input.id = "hobbyInput";
      input.name = "hobbies";
      input.placeholder = "Enter a hobby";
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }




/*Education Section*/
function addEdu() {
      const container = document.getElementById('edu-container');
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `
        <label>School/College: <br><input type="text" id="eduInput" name="eduTitle[]" required></label><br>
        <label>Level:<br><textarea id="eduInput" name="eduDesc[]"  required></textarea></label>
      `;
      container.appendChild(div);
    }


/*Activity Section*/
    function addActivity() {
      const container = document.getElementById('activity-container');
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `
        <label>Activity: <br><input type="text" id="extraInput" name="actTitle[]" required></label><br>
        <label>Time Period:<br><textarea id="extraInput" name="actDesc[]"  required></textarea></label>
      `;
      container.appendChild(div);
    }

/*Work Section*/
function addWork() {
      const container = document.getElementById('work-container');
      const div = document.createElement('div');
      div.className = 'entry';
      div.innerHTML = `
        <label>Job Title: <br><input type="text" id="workInput" name="jobTitle[]" required></label><br>
        <label>Description:<br><textarea id="workInput" name="jobDesc[]"  required></textarea></label>
      `;
      container.appendChild(div);
    }
    
    

  
    
    
