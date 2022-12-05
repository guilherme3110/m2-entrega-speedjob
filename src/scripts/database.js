const frontEndJobs = [
    {
        id:01,
        title: "Desenvolvedor Frontend",
        descrription:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
        modality: ["Full Time","Remote"]
    },
    {
        id:02,
        title: "Frontend Developer",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
        modality: ["Full Time","Remote"]
    },
    {
        id:03,
        title: "Desenvolvedor Frontend",
        descrription:"The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures,",
        modality: ["Full Time","Presencial"]
    },
    {
        id:04,
        title: "Programador Frontend",
        descrription:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms",
        modality: ["Full Time","Remote"]
    },
    {
        id:05,
        title: "UI Developer",
        descrription:"But in certain circumstances and owing to the claims of duty or the obligations",
        modality: ["Full Time","Remote"]
    },
    {
        id:06,
        title: "Desenvolvedor Frontend",
        descrription:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        modality: ["Full Time","Remote"]
    },
]

const backEndJobs = [
    {
        id:01,
        title: "Desenvolvedor Backend",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        modality: ["Full Time","Remote"]
    },
    {
        id:02,
        title: "Desenvolvedor Backend",
        descrription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        modality: ["Full Time","Presencial"]
    },
    {
        id:03,
        title: "Desenvolvedor Node",
        descrription:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ",
        modality: ["Full Time","Remote"]
    },
    {
        id:04,
        title: "Dev Javascript Backend",
        descrription:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        modality: ["Full Time","Remote"]
    },
    {
        id:05,
        title: "Desenvolvedor Java",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        modality: ["Full Time","Remote"]
    },
    {
        id:06,
        title: "Backend Developer",
        descrription:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
        modality: ["Full Time","Remote"]
    },
]


 function renderListFrontEnd(frontEndJobs){
    const secaoCard = document.querySelector('.frontEnd__container')
        for(let i = 0; i < frontEndJobs.length; i++) {
        
        liCard = document.createElement('li')

        let title = document.createElement('h2')
        title.classList.add = frontEndJobs[i].title
        title.innerHTML = frontEndJobs[i].title

        let p = document.createElement('p')
        p.classList.add = frontEndJobs[i].descrription
        p.innerHTML = frontEndJobs[i].descrription

        let span = document.createElement('span')
        span.classList.add = frontEndJobs[i].modality
        span.innerHTML = frontEndJobs[i].modality


        secaoCard.appendChild(liCard)
        liCard.appendChild(title)
        liCard.appendChild(p)
        liCard.appendChild(span)
    }
 }

 renderListFrontEnd(frontEndJobs)

  function renderListBackEnd(backEndJobs){
    const secaoCard = document.querySelector('.backEnd__container')
        for(let i = 0; i < backEndJobs.length; i++){
        
        liCard = document.createElement('li')

        let title = document.createElement('h2')
        title.classList.add = backEndJobs[i].title
        title.innerHTML = backEndJobs[i].title

        let p = document.createElement('p')
        p.classList.add = backEndJobs[i].descrription
        p.innerHTML = backEndJobs[i].descrription

        let span = document.createElement('span')
        span.classList.add = backEndJobs[i].modality
        span.innerHTML = backEndJobs[i].modality


        secaoCard.appendChild(liCard)
        liCard.appendChild(title)
        liCard.appendChild(p)
        liCard.appendChild(span)
        }
  }

  renderListBackEnd(backEndJobs)
 







