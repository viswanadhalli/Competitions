import logo from './team.jpg'
import './Body.css';
function Body(){
  return(
    <div class="all">
            <h1 style={{color: "blue"}}>Potential of Research Competitions</h1>
            <h3 style={{color: "grey"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There is no doubt that research competitions can inspire creative solutions to problems and significant scientific breakthroughs. Research challenges typically offer well-annotated data sets upon which you can test your own research technique or algorithm, or just enjoy the opportunity to test your brain by solving the problem posted by the creator of the challenge. Challenges can definitely be a good option for research practice or to find a serendipitous match for an algorithm you may already be working on.</h3>
            <h3 style={{color: "grey"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unless your degree program requires participation in a challenge/competition as part of your graduate coursework, or your idea is truly groundbreaking and/or marketable, most competitions represent an expenditure of effort with only a partial chance of a successful financial outcome. With only so many hours in a day, chasing competitions in search of marginal fame and probably limited fortune seems like a fruitless exercise. Better to devote your efforts to research funding and/or research collaboration efforts so that your work finds a receptive audience and makes the valuable contribution to the field to which you aspire.</h3>
            <center><img src={logo} alt="BigCo Inc. logo"/></center>
            <div class='header'>
                <div><h2>Sr. No</h2></div>
                <div><h2>Name of the Competition</h2></div>
                <div><h2>Date</h2></div>
                <div><h2>Details</h2></div>
            </div>
            
            <div class="Competitions">
                <div class="Com">
                    <div class='header1'>
                        <div><h2>1</h2></div>
                        <div ><h2> UNESCO/POLAND Co-Sponsored Fellowships Programme in Engineering Cycle 2020  </h2></div>
                        <div><h2>Wednesday, September 9, 2020</h2></div>
                        <div><p><a href="#">Attachment</a></p></div>
                    </div>
                    <hr class='new1'></hr>
                    <div class='header1'>
                        <div><h2>2</h2></div>
                        <div ><h2>IBM Hack Challenge 2020 - online learning and hands-on technical learning</h2></div>
                        <div><h2>Friday, May 29, 2020</h2></div>
                        <div><p><a href="#">Attachment</a></p></div>
                    </div>
                    <hr class='new1'></hr>
                    <div class='header1'>
                        <div><h2>3</h2></div>
                        <div><h2> 50th anniversary of Earth day: Let’s pray together to save our planet  </h2></div>
                        <div><h2>Wednesday, April 22, 2020</h2></div>
                        <div><p><a href="#">Attachment</a></p></div>
                    </div>
                    <hr class='new1'></hr>
                    <div class='header1'>
                        <div><h2>4</h2></div>
                        <div ><h2>The NPTEL Special Lecture Series in the event of Covid-19 lockdown </h2></div>
                        <div><h2>Sunday, April 19, 2020</h2></div>
                        <div><p><a href="#">Attachment</a></p></div>
                    </div>
                </div>
        </div>
        <br></br>
        <div id="dark-theme" class='flex w-full p-0 sm:p-8 body'>
  <div class='flex flex-col items-center w-full gap-4 p-2 m-auto sm:p-4 md:w-8/12 lg:w-8/12 xl:w-6/12 rounded-xl form'>
    
    <form class='flex flex-col w-full gap-4 '>
      <div>
        <span class='flex flex-col justify-between xl:flex-row '>
          <div class='flex flex-col'>
            <label class='p-1' for="First name">Full Name</label><br></br>
            <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="First name" id="First name" placeholder="First name" type="text" />
          </div>
          <div class='flex flex-col'>
            <label class='p-1' for="Email">Email</label><br></br>
                <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Email" id="Email" placeholder="Email" type="email" />
          </div>
          <div class='flex flex-col'>
            <label class='p-1' for="Phone Number">Phone Number</label><br></br>
                <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Phone Number" id="Phone Number" placeholder="Phone Number" type="number" />
          </div>
          <div class='flex flex-col'>
            <label class='p-1' for="Last name">Competition Name</label><br></br>
            <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Last name" id="Last name" placeholder="Competition Name" type="text" />
          </div>
        </span>
      </div>
      <div class='flex flex-col'>
        <label class='p-1' for="City">Competition Date</label><br></br>
            <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="City" id="City" placeholder="City" type="date" />
      </div>
      <div class='flex flex-col'>
        <label class='p-1' for="State">Document</label><br></br>
            <input class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="State" id="State" placeholder="State" type="file" />
      </div>
      
      
      <div class='flex flex-col'>
        <label class='p-1' for="Message">Details</label><br></br>
        <textarea class='px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' name="Details" id="Details" placeholder="Details" type="text" >
          Message
        </textarea>
      </div>
      <div class='flex items-center w-full gap-4'>
        <p>By Submitting this, You are agree to the
          <a class='underline' to=""> Privacy Policy </a>
          and
          <a class='underline' to=""> Cookie Policy </a>
        </p>
      </div>
      <button class='px-6 py-4 font-semibold bg-purple-500 rounded-lg'>Submit</button>
    </form>
  </div>
</div>
    </div>
    
     
  );
}

export default Body;
