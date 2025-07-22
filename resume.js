const params = new URLSearchParams(window.location.search);

const fullName = params.get('fullName');
document.getElementById("name").textContent = `${fullName}`;

const Status = params.get('status');
document.getElementById("status").textContent = `${Status}`;

const address = params.get('address');{
    document.getElementById("address1").textContent = `${address}`;
    document.getElementById("address2").textContent = `${address}`;
}

const phone = params.get('phone'); {
    document.getElementById("phone1").textContent = `${phone}`;
    document.getElementById("phone2").textContent = `${phone}`;
}

const email = params.get('email'); {
    document.getElementById("email").textContent =`${email}`;
}

const description = params.get('description'); {
    document.getElementById("description").textContent = `${description}`;
}



/*image Section*/
const photoData = params.get('photo');
    if (photoData) {
      const photoBox = document.getElementById('image');
      photoBox.style.backgroundImage = `url(${decodeURIComponent(photoData)})`;
    }




/*Skill Section*/
const skillsList = document.getElementById("skills");
const allSkills = params.getAll("skill");
allSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});



/*Language Section*/
const langsList = document.getElementById("langs");
    const allLangs = params.getAll("lang");
    allLangs.forEach(lang => {
      const li = document.createElement("li");
      li.textContent = lang;
      langsList.appendChild(li);
    });


/*Hobby section*/
const hobbies = params.getAll("hobbies");
    const ul = document.getElementById("hobby-list");
    hobbies.forEach(hobby => {
      const li = document.createElement("li");
      li.textContent = hobby;
      ul.appendChild(li);
    });





 
/*work*/
function displaySection(titleKey, descKey, containerId) {
      const titles = params.getAll(`${titleKey}[]`);
      const descs = params.getAll(`${descKey}[]`);
      const container = document.getElementById(containerId);

      titles.forEach((title, i) => {
        const desc = descs[i];
        const div = document.createElement('div');
        div.innerHTML = `<p><strong>${title}</strong><br>${desc}</p>`;
        container.appendChild(div);
      });
    }

    displaySection('jobTitle', 'jobDesc', 'work');
    displaySection('eduTitle', 'eduDesc', 'education');
    displaySection('actTitle', 'actDesc', 'activities');










