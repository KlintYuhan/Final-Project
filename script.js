function scrollToSkills() {
    var skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrolltohome() {
    var skillsSection = document.getElementById('home');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

if (performance.navigation.type == 1) {
 
    window.location.href = "index.html"; 
}

  const skillsSection = document.querySelector('.skills');
  const skillElements = document.querySelectorAll('.skill');

  const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              skillElements.forEach(element => {
                  element.style.opacity = 1;
              });
          }
          else{
            skillElements.forEach(element => {
                element.style.opacity = 0;
            });

          }
      });
  }, { threshold: 0.5 });

  skillElements.forEach(element => {
      observer1.observe(element);
  });



const experienceContainers = document.querySelectorAll('.container');

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

experienceContainers.forEach(container => {
    observer.observe(container);
});

const timeline = document.querySelector('.timeline');

const handleTimelineIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.opacity(0);
        }
    });
};

const timelineObserver = new IntersectionObserver(handleTimelineIntersection, { threshold: 0.5 });

timelineObserver.observe(timeline);


const projectElements= document.querySelectorAll('.gallery');

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectElements.forEach(element => {
                element.style.opacity = 1;
            });
        }
        else{
          projectElements.forEach(element => {
              element.style.opacity = 0;
          });

        }
    });
}, { threshold: 0.5 });

projectElements.forEach(element => {
    observer2.observe(element);
});

const aboutElements= document.querySelectorAll('.about');

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutElements.forEach(element => {
                element.style.opacity = 1;
            });
        }
        else{
          aboutElements.forEach(element => {
              element.style.opacity = 0;
          });

        }
    });
}, { threshold: 0.5 });

aboutElements.forEach(element => {
    observer3.observe(element);
});


const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', function () {
  if (root.style.getPropertyValue('--primary-color') === 'black') {
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--primary-text-color', 'black');
    root.style.setProperty('--secondary-color', 'black');
    root.style.setProperty('--secondary-text-color', 'white');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');

  } else {
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--primary-text-color', 'white');
    root.style.setProperty('--secondary-color', 'white');
    root.style.setProperty('--secondary-text-color', 'black');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

