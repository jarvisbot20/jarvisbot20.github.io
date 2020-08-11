function tre_submit_integrations(){
  console.log("function called");
  var bucket_id = $("#tre_bucket_id").val();
  var api_key = $("#tre_api_key").val();
  var api_token = $("#tre_api_token").val();
  
  var obj ={
   "trello" : {
        "board" : bucket_id, 
        "apikey" : api_key,
        "apisecret" : api_token
    }
  };
  var settings={
      "async": true,
      "crossDomain": true,
      "url": "https://codefundo2019.tk/integrations",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "token": localStorage.getItem("auth_token")
      },
      "process_data": false,
      "data" : JSON.stringify(obj),
  };
  
  $.ajax(settings).done(function (data) {
      if((bucket_id.localeCompare("") && api_key("") && api_token.localeCompare(""))){
          alert("Successful");
      }
      else{
        alert("All fields are mandatory");
      }
    });
    
}

function gh_submit_integrations(){

    var username = $("#gh_username").val();
    var personal_access_token = $("#gh_personal_access_token").val();
    var organization = $("#gh_organization").val();
    var obj =
    {
      "github": {
        "username" : username, 
        "personal_token" : personal_access_token,
        "orgname" : organization
      }
    };

    var settings={
        "async": true,
        "crossDomain": true,
        "url": "https://codefundo2019.tk/integrations",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "token": localStorage.getItem("auth_token")
        },
        "process_data": false,
        "data" : JSON.stringify(obj),
    };
    $.ajax(settings).done(function (data) {
        if((username.localeCompare("") && personal_access_token.localeCompare("") && organization.localeCompare(""))){
          alert("Successful");
        }
        else{
          alert("All fields are mandatory");
        }
      });
}

function tra_submit_integrations(){

  var apikey=$("#tra_api_token").val();
  var obj =
  {
    "travis": {
      "apikey" : apikey 
    }
  };

  var settings={
      "async": true,
      "crossDomain": true,
      "url": "https://codefundo2019.tk/integrations",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "token": localStorage.getItem("auth_token")
      },
      "process_data": false,
      "data" : JSON.stringify(obj),
  };
  $.ajax(settings).done(function (data) {
    if(apikey.localeCompare("")){
      alert("Successful");
    }
    else{
      alert("All Fields are Mandatory");
    }
    });
}