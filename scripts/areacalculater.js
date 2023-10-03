function calculateRectangleArea(){
     const baseField = document.getElementById('rectangle-base');
     const baseFieldString = baseField.value;
     const base = parseFloat(baseFieldString);
     baseField.value = '';
     // console.log(base);
     

     const heightField = document.getElementById('rectangle-height');
     const heightFieldString = heightField.value;
     const height = parseFloat(heightFieldString);
     heightField.value = '';
     // console.log(height);

     if(isNaN(base) || isNaN(height)){
          alert('Please insert a Number!!!');
          return;
      }
     
     
     const area = 0.5 * base * height;
     // console.log(area);

     // show area
     const showArea = document.getElementById('rectangle-area');
     showArea.innerText = area;

     addToCalculationEntry('Rectangular', area);
};

function calculateTrangularArea(){
     const widthField = document.getElementById('triangle-width');
     const widthFieldString = widthField.value;
     const width = parseFloat(widthFieldString);
     widthField.value = '';
     console.log(width);
     
     

     const triangleHeight = document.getElementById('triangle-height');
     const triangleHeightString = triangleHeight.value;
     const heightt = parseFloat(triangleHeightString);
     triangleHeight.value = '';
     console.log(heightt);

     // validate input
     if(isNaN(width) || isNaN(heightt)){
         alert('Please insert a Number!!!');
         return;
     }

     const triangleMultiple = width * heightt;
     

     const triangleArea = document.getElementById('triangle-area');
     triangleArea.innerText = triangleMultiple;
     addToCalculationEntry('Triangle', triangleMultiple)
};


// reusable function ---> reduce duplicate code
function calculateParallelogramArea(){
     const width = getInputValue('parallelogram-width');
     // console.log(width);

     const length = getInputValue('parallelogram-length');
     // console.log(length);

     if(isNaN(width) || isNaN(length)){
          alert('Please insert a Number!!!');
          return;
      }

     const total = width * length;
     // console.log(total);
     setElementInnerText('parallelogram-area', total);

     // add to calculation entry
     addToCalculationEntry('Parallelogram', total);
     
}

function calculateEllipseArea(){
     const majorRadius = getInputValue('ellipse-first-radius');
     const minarRadius = getInputValue('ellipse-second-radius');
     
     if(isNaN(majorRadius) || isNaN(minarRadius)){
          alert('Please insert a Number!!!');
          return;
      }

     const totalRadius = 3.14 * majorRadius * minarRadius;
     setElementInnerText('ellipse-area', totalRadius);
     addToCalculationEntry('Ellipse', totalRadius);
}

function getInputValue(fieldId){
     const inputField = document.getElementById(fieldId);
     const inputFieldText = inputField.value;
     const value = parseFloat(inputFieldText);
     inputField.value = '';
     return value;
     
};

// reusable set span p div etc text
function setElementInnerText(elementId, pararal){
     const element = document.getElementById(elementId);
     element.innerText = pararal;
}
// add to calculation entry
// 1. get the element where you want to add the dynamic HTML
// 2. create an element you want to add
// 3.if needed add some class 
// set inner HTML, it could be dinamic string

function addToCalculationEntry(areaType, total){
     console.log(areaType + ' ' + total);
     const calculationEntry = document.getElementById('calculation-entry');

     const count = calculationEntry.childElementCount;

     const p = document.createElement('p');
     p.classList.add('my-4');
     p.innerHTML = `${count + 1}. ${areaType} ${total} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
     calculationEntry.appendChild(p);
}

//  Date valudation

// 1. set the proper type of the input field.(number, data, email)
// check type using type of
// Nan means: Not a number: isNaN is checking whether the input is not a number or not.