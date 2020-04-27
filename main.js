const roadmap = [
    { 
       phase:0,
       "All Residents": ["All residents stay home unless absolutely necessary", "All work from home unless essential", "Wear masks in public Schools closed", "No gatherings over 10"],
       "Restaurants & Bars Serving Food": ["Closed", "Only curbside service and takout"],
       "Bars & Entertainment Venues": ["Closed"],
       "Retail Stores & Commercial Businesses": ["Closed"],
       "Nail Salons, Hair Salons, Massage, Etc.": ["Closed"],
       "Healthcare & Dental":["Beginning April 30, routine and elective procedures < age 70", "Employees screened daily and wear masks"],
       "Gyms & Fitness": ["Closed"],
       "Playgrounds, tennis & basketball courts": ["Closed"],
       "Sports Venues": ["Closed"]
     },
     { 
        phase:1,
        "All Residents": ["Age 65+ and High-risk stay at home", "All work from home if possible", "All residents wear masks in public", "Schools closed", "No gatherings over 10"],
        "Restaurants & Bars Serving Food": ["Open at 1/2 capacity", "Clean all surfaces after every use", "Employees screened daily and required to wear face masks", "Bar areas closed and no live music"],
        "Bars & Entertainment Venues": ["Closed"],
        "Retail Stores & Commercial Businesses": ["Open at 1/2 capacity", "Employees screened daily and wear face masks"],
        "Nail Salons, Hair Salons, Massage, Etc.": ["Closed"],
        "Healthcare & Dental":["Routine and elective procedures < age 70", "Employees screened daily and wear masks"],
        "Gyms & Fitness": ["Closed"],
        "Playgrounds, tennis & basketball courts": ["Closed"],
        "Sports Venues": ["Closed"]
      },
      { 
        phase:2,
        "All Residents": ["Age 65+ and high-risk stay at home", "Work from home If possible", "Wear masks in public", "Schools closed", "Small gatherings up to 50 (meetings, religious services, weddings, etc.)"],
        "Restaurants & Bars Serving Food": ["Open at 3/4 capacity", "Clean all surfaces after every use", "Employees screened daily and required to wear face masks", "Bar areas closed and no live music"],
        "Bars & Entertainment Venues": ["Closed"],
        "Retail Stores & Commercial Businesses": ["Open at 3/4 capacity", "Employees screened daily and wear face masks"], 
        "Nail Salons, Hair Salons, Massage, Etc.": ["Open by Appointment only; no walk-ins", "Limit number of staff and customers to 10", "Employees screened daily and wear masks"],
        "Healthcare & Dental":["Routine and elective procedures for all age groups", "Employees screened daily and wear masks"],
        "Gyms & Fitness": ["Closed"],
        "Playgrounds, tennis & basketball courts": ["Open with social distancing"],
        "Sports Venues": ["Closed"]
      },
      { 
        phase:3,
        "All Residents": ["Age 65+ and high-risk stay at home", "Work from home If possible", "Wear masks in public Nonresidential K-12 schools can reopen", "Gatherings up to 100 (meetings, religious services, weddings, etc.)"],
        "Restaurants & Bars Serving Food": ["Open at full capacity", "Clean all surfaces after every use", "Employees screened daily and required to wear face masks ", "Bars open at 50% capacity; no standing at bars", "Live music permitted"],
        "Bars & Entertainment Venues": ["Open at 1/2 Capacity Includes tours, museums, theaters, etc.", "Clean all surfaces after every use", "Employees screened daily and required to wear face masks "],
        "Retail Stores & Commercial Businesses": ["Open at full Capacity", "Employees screened daily and wear face masks"],
        "Nail Salons, Hair Salons, Massage, Etc.": ["Open by appointment only; no walk-ins", "Limit number of staff and customers to 10", "Employees screened daily and wear masks"],
        "Healthcare & Dental":["Routine and elective procedures for all age groups", "Employees screened daily and wear masks"],
        "Gyms & Fitness": ["Open Employees screened daily and wear masks", "Clean equipment after every use"],
        "Playgrounds, tennis & basketball courts": ["Open with social distancing"],
        "Sports Venues": ["Closed"]
      },
      { 
        phase:4,
        "All Residents": ["Age 65+ and high-risk stay home", "Work from home is optional", "Wearing masks is optional, but recommended", "Nonresidential K-12 schools can reopen", "Gatherings over 100 permitted (meetings, religious services, weddings, etc.)"],
        "Restaurants & Bars Serving Food": ["Open at full capacity", "Clean all surfaces after every use", "Employees screened daily", "Employees wearing masks is optional, but recommended"],
        "Bars & Entertainment Venues": ["Open at full capacity", "Clean all surfaces after every use", "Employees screened daily", "Employees wearing masks is optional, but recommended"],
        "Retail Stores & Commercial Businesses": ["Open at full capacity", "Employees screened daily", "Employees wearing masks is optional, but recommended"],
        "Nail Salons, Hair Salons, Massage, Etc.": ["Open by Appointment only; no walk-ins", "Limit number of staff and customers to 10", "Employees screened daily", "Employees wearing masks is optional, but recommended"],
        "Healthcare & Dental":["Routine and elective procedures for all age groups", "Employees screened daily and wear masks"],
        "Gyms & Fitness": ["Open", "Clean equipment after every use", "Employees screened daily", "Employees wearing masks is optional, but recommended"],
        "Playgrounds, tennis & basketball courts": ["Open"],
        "Sports Venues": ["Open", "Employees screened daily", "Employees wearing masks is optional, but recommended"]
      }
]




    const printToDOM=(selector, phaseString)=>{
        const div = document.querySelector(selector);
        div.innerHTML= phaseString;
    }






    const phaseLoop = (phaseObj)=>{
        let phaseString = "";
        for (let i = 0; i < phaseObj.length; i++) {
            phaseString += `<div class="card card${i}">`;
            phaseString += `<h2 class="phaseText">PHASE: ${phaseObj[i].phase}</h2>`;
            for (const property in phaseObj[i]) {
                
                if (property !== "phase"){
                    phaseString += `<div class="column">`;
                phaseString += `<header>${property}</header>`;
                for (const item in phaseObj[i][property]){
                    
                    phaseString += `<h4>${phaseObj[i][property][item]}</h4>`;
                }   
                phaseString += `</div>`;             
                }
                
            }
            phaseString += `</div>`;            
            
        }
        console.log(phaseString);
        const selector = '.content';
        printToDOM(selector, phaseString);
        
    }

    const showitem=(event)=>{

        const allCards=document.querySelectorAll(".card");

        const firstHideAll=()=>{
            for (let i = 0; i < allCards.length; i++) {
                allCards[i].classList.remove("show");               
            }
        }

           
        console.log(event.target);
        if(event.target.classList.contains("phase0")){
            firstHideAll();
            allCards[0].classList.add("show");
        } else if(event.target.classList.contains("phase1")){
            firstHideAll();
            allCards[1].classList.add("show");
        } else if(event.target.classList.contains("phase2")){
            firstHideAll();
            allCards[2].classList.add("show");
        } else if(event.target.classList.contains("phase3")){
            firstHideAll();
            allCards[3].classList.add("show");
        } else {
            firstHideAll();
            allCards[4].classList.add("show");
        }

    
    }

  

    const eventHandler=()=>{
        const buttons= document.querySelectorAll("button");
    
        for (let i = 0; i < buttons.length; i++) {
           buttons[i].addEventListener("click", showitem);
            
        }
    }


    const init=()=>{
        phaseLoop(roadmap);
        eventHandler();
    }

init();



