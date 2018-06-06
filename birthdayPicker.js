

/**
 * Benoetigt ein Span Tag, fuegt dort das Formular ein,
 * Das ausgewaehlte Datum wird im Value Attribut des span-Tags
 * gespeichert. 
 * Beispiel:
 * <span id="birthdayForm"> </span>  
 *
 *    == > <span id="birthdayForm" value="12.03.2004"> </span> 
 *  
 * Initialisierung:
 * 
 *      const birthdayPickerMES = new BirthdayPickerMES("birthdayForm");  
 *
 *             
**/
class BirthdayPickerMES{
	// ID of the span
  //ID vom span-Tag
  constructor(id){

  	this.span = document.getElementById(id); 
    this.day = document.createElement('select'); //Create three option forms
    this.month = document.createElement('select');
    this.year = document.createElement('select');
    
    let option = document.createElement('option');
    option.innerHTML = "Tag";
    this.day.appendChild(option);
    
    option = document.createElement('option');
    option.innerHTML = "Monat";
    this.month.appendChild(option);
    
    option = document.createElement('option');
    option.innerHTML = "Jahr";
    this.year.appendChild(option);
    
    this.day.addEventListener('click', () => this.saveInSpan());
    this.month.addEventListener('click', () => this.saveInSpan());
    this.year.addEventListener('click', () => this.saveInSpan());
   
    
    this.fillSelectForm(this.day, 1, 31);
    this.fillSelectForm(this.month, 1, 12);
    let currentYear = (new Date()).getFullYear();
    this.fillSelectForm(this.year,currentYear-25,currentYear-13);
    this.span.appendChild(this.day);
    this.span.appendChild(this.month);
    this.span.appendChild(this.year);
    
  }
  
  fillSelectForm(selectForm, begin, end){
    for(let i = begin; i <=end;i++){
      let option = document.createElement('option');
      option.innerHTML = ''+i;
      option.value = ''+i;
      selectForm.appendChild(option);
    }
     
  }
  
  saveInSpan(){
    
    if(this.day.selectedIndex === 0 || this.month.selectedIndex === 0 || this.year.selectedIndex === 0){
    
      return;
    }
    let string =(this.day.value + '.' +this.month.value +'.'+this.year.value );
    this.span.setAttribute('value', string);
  }
  

}

  