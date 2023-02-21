const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

var DB = {
    games:
        {
            "status":200,
            "message":"OK",
            "data":{
               "validate":{
                   "is_trial":true ,
                  "is_pro":true ,
                  "end_date":"2030-10-10T00:00:00",
                  "day_remaining":518400,
                  "life_time":false
               },
               "access_modules":{
                  "message":{
                     "access":  true ,
                     "attachment":true ,
                     "delay":true ,
                     "attachmentlimit":4,
                     "delayvalue":1,
                     "personalize":true ,
                     "product":true ,
                     "label":true 
                  },
                  "exportcontact":{
                     "access":true 
                  },
                  "sequence":{
                     "access":true ,
                     "max":500
                  },
                  "linkgenrator":{
                     "access":true 
                  },
                  "blurinfo":{
                     "access":true 
                  },
                  "customtab":{
                     "access":true ,
                     "custom":true ,
                     "max":500
                  },
                  "messagetemplate":{
                     "access":true ,
                     "max":500
                  },
                  "smartreply":{
                     "access":true ,
                     "max":500
                  },
                  "campaign":{
                     "access":true ,
                     "max":500
                  },
                  "webhook":{
                     "access":true,
                     "maxincoming":500,
                     "maxoutgoing":500,
                     "support":[
                        "heroku"
                     ]
                  },
                  "integrations":{
                     "access":true,
                     "support":[
                        "pabblyconnect",
                        "zapier",
                        "integrately"
                     ]
                  },
                  "customtag":{
                     "access":true ,
                     "max":100
                  },
                  "customfield":{
                     "access":true ,
                     "custom":true ,
                     "max":100
                  },
                  "inject":{
                     "add_event":true ,
                     "schedule_message":true ,
                     "copy_translate":true ,
                     "reminder":true ,
                     "notes":true ,
                     "quick_reply":true ,
                     "thumb_up":true ,
                     "profile":true ,
                     "recurrence":true 
                  },
                  "extra":{
                     "import_export":true ,
                     "global_actions":true ,
                     "delete_all":true ,
                     "pr_button":true ,
                     "group_action":true ,
                     "wa_utility":true ,
                     "recurring":true ,
                     "recurrence":true ,
                     "sequence":true 
                  }
               },
               "plan_type":"pro-plus",
               "device_data":null,
               "is_user_blocked":false ,
               "is_user_blocked_config":null,
               "check_number_type":"both",
               "check_number_type_v2":"both",
               "wa_keys":{
                  "2.2226.3":{
                     "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                     "override_check_type":true
                  },
                  "all":{
                     "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                     "override_check_type":true
                  }
               },
              "usst_trial_start":true,
               "usst_trial_about_end":true,
               "usst_trial_end":false
            }
         },

         free:
        {
            "status":200,
            "message":"OK",
            "data":{
                "validate":{
                   "is_trial":false,
                   "is_pro":true,
                   "end_date":"2030-08-25T00:00:00",
                   "day_remaining":0,
                   "life_time":true
                },
                "access_modules":{
                   "message":{
                      "access":  false ,
                      "attachment":false,
                      "delay":false,
                      "attachmentlimit":4,
                      "delayvalue":5,
                      "personalize":false,
                      "product":false,
                      "label":false
                   },
                   "exportcontact":{
                      "access":false
                   },
                   "sequence":{
                      "access":false,
                      "max":500
                   },
                   "linkgenrator":{
                      "access":false
                   },
                   "blurinfo":{
                      "access":false
                   },
                   "customtab":{
                      "access":false,
                      "custom":false,
                      "max":500
                   },
                   "messagetemplate":{
                      "access":false,
                      "max":500
                   },
                   "smartreply":{
                      "access":false,
                      "max":500
                   },
                   "campaign":{
                      "access":false,
                      "max":500
                   },
                   "webhook":{
                      "access":false,
                      "maxincoming":500,
                      "maxoutgoing":500,
                      "support":[
                         "heroku"
                      ]
                   },
                   "integrations":{
                      "access":false,
                      "support":[
                         "pabblyconnect",
                         "zapier",
                         "integrately"
                      ]
                   },
                   "customtag":{
                      "access":false,
                      "max":100
                   },
                   "customfield":{
                      "access":false,
                      "custom":false,
                      "max":100
                   },
                   "inject":{
                      "add_event":false,
                      "schedule_message":false,
                      "copy_translate":false,
                      "reminder":false,
                      "notes":false,
                      "quick_reply":false,
                      "thumb_up":false,
                      "profile":false
                   },
                   "extra":{
                      "import_export":false,
                      "global_actions":false,
                      "delete_all":false,
                      "pr_button":false,
                      "group_action":false,
                      "wa_utility":false,
                      "recurring":false,
                      "sequence":false
                   }
                },
                "plan_type":"free",
                "device_data":null,
                "is_user_blocked":false,
                "is_user_blocked_config":false,
                "check_number_type":"both",
                "check_number_type_v2":"both",
                "wa_keys":{
                   "2.2226.3":{
                      "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                      "override_check_type":true
                   },
                   "all":{
                      "check_pr_number":"window.PR.checkPRNumber = function (id){ return { isLid : function() { return false }, toString : function() { return id } } }",
                      "override_check_type":true
                   }
                },
                "usst_trial_start":true,
                "usst_trial_about_end":false,
                "usst_trial_end":false
             }
         }
    
}
const user = {
   sub_key: ['147beh5zgxyjai082vnus9rqm4df7otw13', '147beh5zgxyjai082vnus9rqm4df7otw16', '1476lj94rph50mduwin718kqytxzfoegv3']
   }


app.post("/ext",(req, res) => {
    if (req.body) {
      

        var teste = req.body.sub_key

        const acessoValido = user.sub_key.find(teste => teste);
        if (teste === acessoValido) {
        res.statusCode = 200;
        res.json(DB.games);}else{
        res.statusCode = 200;
        res.json(DB.free);}
}else{res.statusCode = 200;
   res.json(DB.free)}});


app.post("/ext/subscription/add",(req, res) => {
        if (req.params.sub_key || req.params.subsciption_key) {
            res.statusCode = 200;
            res.json(DB.games);
        }else{
            res.statusCode = 200;
            res.json(DB.free)
        }
});


app.get("ext/user/open-extention",(req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/ext",(req, res) => { 
    var {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/ext/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/ext/:id",(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});

app.listen(80,() => {
    console.log("API RODANDO!");
});
