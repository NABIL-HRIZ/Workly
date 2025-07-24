

counters=[
    {id:"counter1",target:70},
    {id:"counter2",target:150},
    {id:"counter3",target:500}
]

counters.forEach(({id,target}) => {
    const span=document.getElementById(id)
    let count=0
    const duration=2000
    const interval=Math.floor(duration/target)

    span.textContent=0

    const counter=setInterval(()=>{
        count++;
        span.textContent=count;
        if(count>=target){
            clearInterval(counter)
        }
    },interval)
});

window.addEventListener('DOMContentLoaded', () => {
      gsap.from('#img1', {
        delay:0.4,
        opacity: 0,
        duration:1,
        y:60
      });
      gsap.from('#img2', {
        delay:0.4,
        opacity: 0,
        duration:1,
        x:60
      });
      gsap.from('#img3', {
        delay:0.4,
        opacity: 0,
        duration:1,
        y:-60
      });
      
       gsap.from('#btn', {
        delay:1,
        opacity: 0,
        duration:1,
        y:60
      });
      gsap.registerPlugin(ScrollTrigger);

const split = new SplitType('#h1', { types: 'chars' });

gsap.from('.char', {
  scrollTrigger: {
    trigger: '#h1',
    start: 'top 80%',
    toggleActions: 'play none none none' 
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.05,
  ease: 'power2.out'
});
       
    });

function sendMail(event) {
  event.preventDefault(); 

  let params = {
    name: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('company').value,
    message: document.getElementById('message').value
  };

  emailjs.send("service_119v33b", "template_h5eztst", params)
    .then(function(response) {
      alert("Email envoyé !");
       // fermer le modal 
      const modal = bootstrap.Modal.getInstance(document.getElementById('modal-dialog'));
      modal.hide();

      // revenir  à la section Hero
      document.getElementById("acceil").scrollIntoView({ behavior: "smooth" });

      // reset form
      document.querySelector("#modal-dialog").reset();
    }, function(error) {
      alert("Erreur : " + error.text);
    });
}



