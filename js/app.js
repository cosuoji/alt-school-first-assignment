let schoolSelections = document.getElementById("school")
let optionsSelected = Array.from(schoolSelections.options)
let courseSelections = document.getElementById("courses")

schoolSelections.addEventListener("click", (e)=>{
   if(e.target.id === "school"){
    courseSelections.innerHTML = ""
   }


   if(e.target.value === 'creative-economy'){
    let newOpt = document.createElement('option')
    newOpt.value = "graphc-design"
    newOpt.innerHTML = "Graphic Design"
    if(courseSelections.length > 1){
        return 
    } else{
        courseSelections.append(newOpt)
    }    
   }  


   if(e.target.value === "business"){
    let busOpt = document.createElement('option')
    busOpt.value = "wealth-creation"
    busOpt.innerHTML = "Wealth Creation"

    let busOptSecond = document.createElement('option')
    busOptSecond.value = "content-mastery"
    busOptSecond.innerHTML = "Content Mastery"

    if(courseSelections.length > 2){
        return 
    } else{
        courseSelections.append(busOpt)
        courseSelections.append(busOptSecond)
    }   
   }
   
})