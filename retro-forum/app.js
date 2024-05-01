const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPost = data.posts;
    // console.log(allPost)
    displayCard(allPost);
  }
 
  const displayCard = allPost => {
   
   
   
    const cardContainer1 = document.getElementById('card-container1');
    cardContainer1.innerHTML = ''; // Clear previous content
    allPost.forEach((item, index, comment) => {
      document.getElementById('spiner').style.display="none"
 
        const showCard = document.createElement('div');
        showCard.style = `grid grid-cols-1 lg:grid-cols-2 `;
        showCard.classList = `card w-[590px] bg-base-100  hover:border-2  border-teal-400 shadow-xl bg-purple-100`;
        showCard.innerHTML = `
            <div class="card-body">
                <div class="flex gap-2">
                    <img class="h-16 w-16 relative rounded-full" src="${item.image}" alt="">
                    <p class="px-3 tracking-wider">#${item.category}</p>
                    <span class="indicator-item badge badge-secondary border-none absolute left-20 ${item.isActive ? "bg-green-500" : "bg-red-500"} "></span>
                    <p class="text-xl font-semibold tracking-wider">Author: ${item.author.name}</p>
                </div>
                <h2 class="card-title text-base font-semibold tracking-wider" id="counting">${item.title}</h2>
                <p class="text-base tracking-wider">${item.description}</p>
                <hr>
                <div class="flex gap-5">
                    <img src="./images/tabler-icon-message-2.png" class="w-9 h-9 rounded-full  shadow-2xl" alt="">
                    <span>${item.comment_count}</span>
                    <img src="./images/Group 16.png" class="w-9 h-9 rounded-full  shadow-2xl" alt="">
                    <span id="viewCount${item}">${item.view_count}</span>
                    <img src="./images/Group 18.png" class="w-9 h-9 rounded-full  text-center shadow-2xl" alt="">
                    <span>${item.posted_time}</span>
                    <button onclick="myBtns(${index}, '${item.title} ${item.comment_count}')" class="" id="click-btn${index}">
                        <img src="./images/email 1.png" class="lg:pl-24 alt="">
                    </button>
                </div>
            </div>`;
        cardContainer1.appendChild(showCard);
       
       
 
 
    });
  }
  let count = 0;
 
  const myBtns = (index, title, item) => {
    const container1 = document.getElementById('addContent');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class=" p-3 bg-white">
            <div class="flex justify-between mb-3 shadow-lg rounded-lg">
                <div class="mb-2">
                    <h1 class="text-xl font-semibold w-60">${title}</h1>
                </div>
                <div class="flex justify-center items-center">
                    <img src="images/tabler-icon-eye.png" alt="">
                    <h1 class="text-xl font-semibold" id="viewCountBtn${item}">1568
                    </h1>
                </div>
            </div>
            <hr>
        </div>`;
    container1.appendChild(div);
   
   
    const counts = document.getElementById('counts');
        count++;
        counts.innerText= count;
       
  }
 
  loadData();
 
  // search event
 
 
 
  const searchByCategory = async () => {
  document.getElementById('spiner').style.display="block"
 
 
    // Get the value entered in the search input
    const category = document.getElementById('searchInput').value;
 
   
 
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPost = data.posts;
   
   
    const filteredPosts = allPost.filter(post => post.category.toLowerCase() === category.toLowerCase());
   
 
    displayCard(filteredPosts);
   
 
 
 
  }
 
 
 
 
  // search event
 
 
  // 2nd part done
 
 
  const postData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latestposts= data;
    console.log(latestposts)
    const cardInfo = document.getElementById('cardInfo');
    latestposts.forEach((item)=>{
        console.log(item)
       
        const div = document.createElement('div');
        div.classList.add=`border-2 px-6 space-y-3 py-3 rounded-xl`;
        div.innerHTML = `
 
        <div class="bg-slate-200 lg:h-[500px]   p-5 rounded-2xl shadow-2xl border-2 border-gray-100">
        <img class="rounded-xl" src="${item.cover_image}" class="mb-2" alt="latest">
        <p class="flex gap-2 mb-2 mt-3 "><img src="images/Frame(2).png" alt="time">${item.author.posted_date || 'No Publish Date'}</p>
        <h3 class="font-bold mb-2">${item.title}</h3>
        <p class="mb-2">${item.description}</p>
        <div class="flex  mb-2">
          <img src="${item.profile_image}" class="w-10 h-10 rounded-full" alt="Users">
          <span class= "items-center">
            <h1 class="pl-3 text-[20px]" >${item.author.name}</h1>
         
                    <h6 class="ml-2">${item.author.designation || 'Owner'}</h6>
          </span>
        </div>
       </div>
       
        `;
 
        cardInfo.appendChild(div)
       
 
 
    })
   
   
  }
 
  postData()