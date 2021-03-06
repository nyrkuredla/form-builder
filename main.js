// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
// defining data field location from HTML
let dataField = document.getElementById("fields");

// iterating over form data array to create new divs, inputs and forms
for (let i = 0; i < formData.length; i++) {

  // creating new div to put label and input in
  let newDiv = document.createElement("div");

  // creating new labels and inputs and assigning attributes from form data array
  let newLabel = document.createElement("label");
  newLabel.setAttribute("for", formData[i].label);
  let newInput = document.createElement("input");
  newInput.setAttribute("type", formData[i].type);
  newInput.setAttribute("id", formData[i].id);
  newInput.setAttribute("placeholder", formData[i].label);

// exception for creating select input type
  if (formData[i].type === "select") {
    newInput = document.createElement("select");

    // create a placeholder option and mark it selected
    let selectPlaceholder = document.createElement("option");
    selectPlaceholder.setAttribute("label", "Select language...");
    selectPlaceholder.classList.add(":checked");
    newInput.appendChild(selectPlaceholder);

    // create language options from input array and append them to select menu
    for (let j = 0; j < formData[i].options.length; j++) {
      let newChoice = document.createElement("option");
      newChoice.setAttribute("label", formData[i].options[j].label);
      newChoice.setAttribute("value", formData[i].options[j].value);
      newInput.appendChild(newChoice);
    }
  }
  // exception for creating textarea input type
  else if
    (formData[i].type === "textarea") {
      newInput = document.createElement("textarea");
      newInput.setAttribute("label", formData[i].label);
      newInput.setAttribute("id", formData[i].id);
      newInput.setAttribute("placeholder", formData[i].label);
    }


  // adding inputs and labels to divs
   newDiv.appendChild(newInput);
   newDiv.appendChild(newLabel);
   
  // adding new divs to data field
  dataField.appendChild(newDiv);
}
