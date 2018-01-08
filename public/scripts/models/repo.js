'use strict';
var app = app || {};

// (function(module) {
//   const repos = {};
//   repos.all = [];

//   repos.requestRepos = function(callback) {
//     $.get('/github/user/repos')
//     .then(data => repos.all = data,
//           err => console.error(err))
//     .then(callback);
//   };

//   console.log(repos.all)
//   repos.with = attr => repos.all.filter(repo => repo[attr]);
//   module.repos = repos;
// })(app);


(function(module) {
  function Project(rawObj){
    this.title = rawObj.name;
    this.url = rawObj.homepage || rawObj.html_url;
    this.dateUpdated = rawObj.pushed_at;
    this.description = rawObj.description;
    this.language = rawObj.language;
    this.isOwner = rawObj.permissions.admin;
  }

  Project.all = []
  Project.filtered = []

  Project.loadAll = function(rawData){
    const wantedRepos = ['portfolio', 'leetcode', 'django-imager', 'pyramid-learning-journal', 'code-katas', 'ticket-jedi', 'casino_war', 'trigrams', 'avatax-rest-v2-python-sdk', 'mailroom', 'techlurker', 'data-structures']
    rawData.sort(function(a,b){
      return (new Date(b.pushed_at)) - (new Date(a.pushed_at));
    });
    Project.all = rawData.map(project => new Project(project));
    Project.all.map(function(repos){
        for(var i = 0; i < wantedRepos.length; i++){
            if (repos.title.toLowerCase() == wantedRepos[i]) {
                Project.filtered.push(repos)
            }
        }
    });
    Project.filtered = Project.filtered.filter(repos=>repos.isOwner)


    // Project.filtered = Project.all
    // .filter(repos=>repos.title.match(/^\D/g))
    // .filter(repos=>repos.isOwner)
    // .filter(repos=>repos.title.match(/^(?!learning).*/));
    console.log(Project.all)
  }

  Project.fetchAll = function(callback){
    $.get('/github/user/repos?per_page=100')
    .then(function(data){
        Project.loadAll(data),
        err => console.error(err)
    }).then(callback);




    // $.ajax({
    //     url:'/github/repos/user',
    //     method:'HEAD',
    //     success:function(date, msg, xhr){
    //         let eTag = xhr.getResponseHeader('ETag');
    //         if (eTag === localStorage.eTag){
    //             Project.loadAll(JSON.parse(localStorage.rawData));
    //             callback()
    //         } else{
    //             $.get('/github/repos/user')
    //             .then(function(data){
    //                 localStorage.eTag = eTag;
    //                 localStorage.rawData = JSON.stringify(data);
    //                 Project.loadAll(data)
    //             })
    //             .then(callback);
    //         }
    //     }
    // })
  }


  module.Project = Project;
})(app);

