define(["jquery"],function(e){return{getUser:function(){var r=e.Deferred();return require(["./app/user"],function(e){r.resolve(e)}),r},getUsers:function(){return new Promise(function(e,r){require(["./app/user"],function(r){e(r)})})}}});