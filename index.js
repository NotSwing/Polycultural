function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "Logo.jpeg";
images[1] = "Class.jpeg";
images[3] = "Family.jpg";
images[4] = "YouthImage.jpg";
images[5] = "SliderLogo.jpg";
images[6] = "Testomonial.jpg";


//Navi collapsibles from whatWeAre.html

/*.BtnCollapisble {
            background-color: #8fb7a5;
            color: #FFF;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            text-align: left;
            border: 1px solid white;
            outline: none;
            transition: 0.4s;
            font: 20px Lato, sans-serif;
        }

Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover)
.active,
.BtnCollapisble:hover {
    background-color: #527e6a;
}

Style the collapse panel. Note: hidden by default
.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}

.BtnCollapisble:after {
    content: '\02795';
    Unicode character for "plus" sign (+)
    font-size: 13px;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\2796";
    /* Unicode character for "minus" sign (-)
}

<section class  = "CollapsibleSection">
<!--History-->
<button type="button" class="BtnCollapisble">History</button>
<div class="panel">
    <h1>Growing with Canada</h1>
    <p>Polycultural Immigrant and Community Services was incorporated on February 3, 1993 as a result of a 
        merger between two agencies: Polish Immigrant Aid Services (founded in 1973) and Polish Canadian 
        Community Services (founded in 1982). Amalgamation was completed in January 1994 with the purpose 
        of providing a broader range of services while avoiding duplication. On August 27, 2000 the 
        organization name was changed to Polycultural Immigrant and Community Services to better reflect 
        local communities served by the organization.</p>
</div> 

<!--About-->
 <button type="button" class="BtnCollapisble">About</button>
    <div class="panel">

        <p>Much like the rich fabric that is Canadian culture, our Polycultural family reflects 
            the cultural, ethnic and linguistic diversity of  the communities we serve. We are 
            dedicated to maintaining an open, inclusive and welcoming environment for all. 
        </p> 

        <!--BOD-->
         <button type="button" class="BtnCollapisble">Board Of Directors</button>
        <div class="panel">
            <header>Adam Altmid
                Chairman Adam
            </header>
            <p>Altmid has been practicing law in Toronto since his call to the bar in 1996.
                 Prior to studding law at Osgoode Hall Law School, Adam received a Bachelor 
                 of Business Management Degree from Ryerson University. Adam is committed to 
                 charitable work and has been involved with the Board of Polycultural Immigrant 
                 and Community Services in various capacities since 1999.	</p>
        </div> 
        <!--SM-->
         <button type="button" class="BtnCollapisble">Senior Management</button>
        <div class="panel">
            <header>Marwan Ismail</header>
            <h3>Executive Director</h3>

            <p>Marwan's role as Executive Director is to work with the board of directors to 
                develop and plan all aspects of Polycultural's operations. Marwan's more than 
                12 years of leadership experience ranges from corporate social responsibility 
                and sustainability, project/program management, strategic business planning, 
                policy development and change management, to communications, marketing and fundraising.</p>
        </div>
        <!--AR-->
         <button type="button" class="BtnCollapisble">Annual Reports</button>
        <div class="panel">
            
        </div>

    </div> 
    <!--Careers-->
     <button type="button" class="BtnCollapisble">Careers</button>
        <div class="panel">
            <h1>Build Your Career at Polycultural Immigrant and Community Services</h1>

            <p>Working at Polycultural  is a meaningful and rewarding experience - it really is 
                not just another job. We offer a friendly working environment across our 7 locations. 
                As part of your work, you constantly interact with people who are new to Canada; 
                these are people who are determined, motivated and driven to succeed while preparing 
                to capture new opportunities. </p>
        </div> 
    <!--VO-->
    <!-- <button type="button" class="BtnCollapisble">Voluteer Opportunites</button>
        <div class="panel">
            <p>Our volunteers contribute many hours assisting Polycultural achieve its service goals 
                and fulfill its mission and vision.Volunteering is more than just sharing time and energy,
                 it’s about the satisfaction of knowing you are assisting the community to become stronger,
                  giving back and gaining valuable experiences.</p>
        </div> -->

    <!--TOS-->
     <button type="button" class="BtnCollapisble">Testimonials and Successes</button>
        <div class="panel">
            <h3>Enhanced Language Training (ELT) Reviews</h3>
            <p>"ELT was an enriching experience as a newcomer. It gave me a broad view of life in Canada 
                and best of all I was able to get my first job in Canada via the placement services." - Ben M. </p>
        </div> 

</section>

var acc = document.getElementsByClassName("BtnCollapisble");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
*/