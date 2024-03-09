var bl = false;
     window.addEventListener('load', function(){
          if(innerWidth < 768){
               if(bl === false){
                    appearMenu();
                    bl = true;
                    
               }
               deleteTag_br();      
          }
          else{
               addTag_br();
          }
     })
     window.addEventListener('resize', function(){
          if(innerWidth < 768){
               if(bl === false){
                    appearMenu();
                    bl = true;
                    
               }
               deleteTag_br();      
          }
          else{
               addTag_br();
          }
          
     })
          
     function appearMenu() {
          var parentElement = document.getElementsByClassName('header--container')[0];
          var newDiv = document.createElement('div');
          parentElement.appendChild(newDiv);
          newDiv.classList.add('iconMenu');
          newDiv.innerHTML = '&#9776;';
          newDiv.id = "newMenu";
          newDiv.addEventListener('click', clickMenu);
          document.documentElement.style.setProperty('--set-Width', window.innerWidth + 'px');
               var element = document.getElementsByClassName('header__nav--icon')[0]; 
     }
     function clickMenu() {
          let clickMenu = document.getElementsByClassName('header__nav--icon');
          for(let element of clickMenu){
               element.style.display = 'block';
          }
          let noneMenu = document.getElementsByClassName('iconMenu')[0];
          noneMenu.style.display ='none';
          let userUp = document.getElementsByClassName('header__nav--icon')[3];
          userUp.classList.add('fa-user--up');
     }
     var clickMenulist = document.getElementsByClassName('header__nav--menu')[1];
     var clickMenulist__check = false;
     clickMenulist.addEventListener('click', function(){
          if(clickMenulist__check === false){
               let appear = document.getElementById('sideBar__hidden');
               appear.id='sideBar__appear';
               clickMenulist__check = true;
               appear = document.getElementById('sideBar__appear');
               changeAppear = appear.querySelector('div');
               changeAppear.style.width = '0px';
               changeAppear.style.height = '0px';
               changeAppear.style.transition = 'none';
               if(innerWidth >= 1024){
                    setTimeout(function() {
                         changeAppear.style.flexDirection = 'row';
                         changeAppear.style.width = '1024px';
                         changeAppear.style.height = '235px';
                         changeAppear.style.transition = 'height 1s';
                    }, 100);
               }
               else if(innerWidth < 1024){
                    setTimeout(function(){
                         changeAppear.style.width = '40vw';
                         changeAppear.style.height = '100vh';
                         changeAppear.style.transition = 'width 1s linear';
                         changeAppear.style.flexDirection = 'column';
                    },100)
                    let insertFind = document.createElement('input');
                    
               }
               appear = document.getElementsByClassName('sideBar__dropList');
               for(var i = 0; i < appear.length - 1; i++){
                    appear[i].style.transition='none';
                    appear[i].style.borderRight='none';
               }
               setTimeout(function() {
                    for(var i = 0; i < appear.length - 1; i++){
                         appear[i].style.transition='border 1s ease 1s';
                         appear[i].style.borderRight='1px solid #004643';
                    }
               }, 100);
               let lowAppear = document.getElementsByClassName('sideBar__header--title');
               for(let i = 0; i < lowAppear.length; i++){
                    lowAppear[i].style.color = 'rgba(0,0,0,0)';
                    lowAppear[i].style.background = 'rgba(0,0,0,0)';
                    lowAppear[i].style.transition = 'none'
               }
               setTimeout(function(){
                    for(let i = 0; i < lowAppear.length; i++){
                    lowAppear[i].style.color = '#fffffe';
                    lowAppear[i].style.background = '#004643';
                    lowAppear[i].style.transition = 'background 0.5s linear 0.5s, color 0.5s linear 0.5s';
               }
               })
               let lowAppear__sub = document.getElementsByClassName('sideBar__dropList--sub');
               for(let i = 0; i < lowAppear__sub.length; i++){
                    let childthis = lowAppear__sub[i].querySelector('a');
                    childthis.style.color = 'rgba(0,0,0,0)';
                    childthis.style.transition = 'none'
               }
               setTimeout(function(){
                    for(let i = 0; i < lowAppear__sub.length; i++){
                    let childthis = lowAppear__sub[i].querySelector('a');
                    childthis.style.color = '#004643';
                    childthis.style.transition = 'color 0.5s linear 1s ';
                    childthis.addEventListener('mouseover', function(){
                         this.style.color='rgb(0,70,67,0.3) ';
                         this.style.transform='scaleX(1.1)';
                    })
                    childthis.addEventListener('mouseleave', function(){
                         this.style.color='#004643';
                         this.style.transform='none';
                    })
               }
               },100)
               let borderAppear = document.getElementById('sideBar--main');
               borderAppear.style.transition='none';
               borderAppear.style.border='none';
               setTimeout(function(){
                    borderAppear.style.border='5px solid #004643';
                    borderAppear.style.transition='border 3s linear 0.5s';
               })
          }
          else{
               let hidden = document.getElementById('sideBar__appear');
               hidden.id='sideBar__hidden';
               clickMenulist__check = false;
          }
          
          window.addEventListener('resize', function(){
               let fixBug__appearMenu = document.getElementById('sideBar__appear');
               fixBug__appearMenu.id='sideBar__hidden';
               clickMenulist__check = false;
          })
          
     })
     function deleteTag_br(){
          let del = document.getElementsByClassName('header__title--logo')[0];
          del.innerHTML = "RD MANIA";
     }
     function addTag_br(){
          let add = document.getElementsByClassName('header__title--logo')[0];
          add.innerHTML ="";
          add.innerHTML = "RD <br/> MANIA";
     }
     </script>