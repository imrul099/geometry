function calculateRectangleArea(){
     const baseField = document.getElementById('rectangle-base');
     const baseFieldString = baseField.value;
     const base = parseFloat(baseFieldString);
     baseField.value = '';
     console.log(base);
     

     const heightField = document.getElementById('rectangle-height');
     const heightFieldString = heightField.value;
     const height = parseFloat(heightFieldString);
     heightField.value = '';
     console.log(height);
     
     
     const area = 0.5 * base * height;
     console.log(area);

     // show area
     const showArea = document.getElementById('rectangle-area');
     showArea.innerText = area;
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

     const triangleMultiple = width * heightt;
     

     const triangleArea = document.getElementById('triangle-area');
     triangleArea.innerText = triangleMultiple;
};
