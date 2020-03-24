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

//raw information taken out 3/24 during reconstruction of whatWeDo page

/*
<button type="button" class="BtnCollapisble">Language Programs</button>
        <div class="panel">
            <h1>Are You New to Canada and Need to Improve Your English?</h1>
            <p>Relocating to Canada is exciting, but is not without challenges. Whether you need to learn 
                English to get a job, apply to post-secondary education, or simply for everyday conversations
                , our language classes are specifically designed to meet your individual needs. We offer a
                range of language programs, including Language Instruction for Newcomers to Canada (LINC),
                Enhanced Language Training (ELT) or Professional Language Training (PLT) program and English
                language clubs designed around a particular field, interest or age group.</p>

                  <!--LLSD-->
            <button type="button" class="BtnCollapisble">Language Learning Skills Development(LLSD)</button>
                 <div class="panel">
                    <h1>LINC classes (Language Instruction for Newcomers to Canada)</h1>
                    <p>Language training is designed to effectively facilitate clients' smooth transition into
                       Canadian life by obtaining the following: language skills necessary to function on an
                        everyday basis; to support the adaptation process; to offer broad knowledge of
                        Canadian culture and values; to develop soft skills; and to obtain language skills
                        for employment and academic purposes. The existing LINC curriculum guidelines
                        are used as a main tool for teaching settlement topics essential for the clients'
                        adaptation. In addition to a variety of settlement topics, workplace culture and
                        communication, building/advancing life skills (critical thinking,
                        problem-solving, decision-making, networking, presentation skills) are included
                        as part of the language instruction.</p>
                </div>

                <!--ELT-->
                <button type="button" class="BtnCollapisble">Enhanced Language Training(ELT)</button>
                 <div class="panel">
                     <header>Having Trouble Finding Work in Your Field?</header>
                     <h2>Enhanced Language Training (ELT)</h2>
                     <p>This program can help internationally trained professionals and skilled workers
                        develop language skills and the knowledge necessary to find employment in their 
                        field of expertise. These fields include business administration, engineering, accounting, 
                        health care, customer service and more. The six (6) week program will help you build on 
                        your existing experience, enhance your knowledge of technical terminology, and allow 
                        for a better smoother transition into the labour market. The program helps highlight 
                        your skills and prepare you for interviews, giving you the added advantage of knowing 
                        what employers in your field expect.</p>         
                </div>

                <!--Online ESL-->
                <button type="button" class="BtnCollapisble">Online ESL</button>
                 <div class="panel">
                    <p>The Online ESL courses run under the AnyWhere ESL Program are designed to use technology 
                        to meet the growing needs of the ESL population in Ontario. The courses employ best 
                        practices and online resources to motivate learners that are at the intermediate level 
                        of language acquisition. The project will expand learning opportunities for learners who 
                        are unable to physically attend classes on a daily basis.</p>
                </div> 
        </div>

        <!-------Connecting to Community---------->
        <button type="button" class="BtnCollapisble">Connecting to Community</button>
        <div class="panel">
            
            <h1>Meet new people, make friends!</h1>
            <h1>Get help, offer help!</h1>
            <p>Polycultural hosts a range of 'community connections' programs aimed at connecting 
                newcomers to their new communities in Canada, offered through the Welcoming Communities 
                Program. We provide newcomers with help establishing social and professional networks 
                so that they are engaged and feel welcome in their local communities. </p>

                <!--Settlement Workers in School-->
            <button type="button" class="BtnCollapisble">Settlement Workers in School</button>
                <div class="panel">
                    <h1>Settlement Workers in Schools (SWIS)</h1>
                    <p>The Settlement Workers in Schools (SWIS) Program is designed to provide consistent 
                        service delivery for newcomer families through local schools. Polycultural has a partnership 
                        with Boards of Education deliver settlement services for newcomers at local schools in 
                        Mississauga. The main objective of the program is to assist newcomer families to 
                        integrate into their school and community by providing information, settlement 
                        services, and referral to community agencies from their local school.</p>
                </div>

                <!--International Medical Graduates-->
                <button type="button" class="BtnCollapisble">International Medical Graduates</button>
                <div class="panel">
                    <p>If you are an International Medical Graduate (IMG) and you’re pursuing medical career 
                        in Canada, we can help you with information on how to obtain an independent practice 
                        license and prepare for your Medical Council of Canada exams including clinical exams 
                        (QE2 & NAC OSCE).</p>
                </div>
        </div>
        <button type="button" class="BtnCollapisble">Youth Services</button>
            <div class="panel">
                <p>We have developed a number of new initiatives to engage youth. Our programs focus on leadership, 
                    employment, self-esteem, social activities and education.
                    Some of the programs we offer:</p>

                    <!--Youth Job Connection-->
                    <button type="button" class="BtnCollapisble">Youth Job Connection</button>
                        <div class="panel">
                            <p>The Youth Job Connection program offers a range of services and opportunities for young people 
                                7to learn about jobs and gain work experience. The program addresses the gap in youth employment 
                                programming for young people who are neither in education, employment or training. These youth face 
                                some of the greatest employment needs and experience significant employment barriers. These 
                                barriers include some combination of challenging life circumstances, limited work experience, 
                                low levels of education or literacy, a lack of motivation, and discrimination. The goal is to secure 
                                long-term employment and meaningful careers.</p>
                        </div>
                    
                    <!--Youth Job Connection(YJC) Summer-->
                    <button type="button" class="BtnCollapisble">Youth Job Connection(YJC) Summer</button>
                        <div class="panel">
                            <p>YJC: Summer is designed to help young people between the ages of 15 to 18 who are facing challenging 
                                life situations. It provides them with pre-employment training and work opportunities that will 
                                help them make informed career and educational planning decisions as they embark on their careers. 
                                YJC: Summer helps participants to make informed educational and career planning decisions by providing:</p>
                        </div>
                    
                    <!--Youth Achievers Programs-->    
                    <button type="button" class="BtnCollapisble">Youth Achievers Programs</button>
                        <div class="panel">
                            <p>Youth Achievers is a series of afterschool activities where children ages 6 to 12 can 
                                have a place to play, exercise and learn new skills—things that help children thrive and 
                                grow in mind and body. </p>
                        </div>
                    
                    <!--Beautiful Girls--> 
                    <button type="button" class="BtnCollapisble">Beautiful Girls</button>
                        <div class="panel">
                            <p>Polycultural Immigrant & Community Services initiated the Beautiful Girls program in March 2011. 
                                The Beautiful girls group is geared to developing confidence and leadership skills in girls 
                                between the ages from 9 to 19. The program helps to develop leaders of the future by involving 
                                girls in planning, leading projects and empowering their fellow youth. It increased the 
                                youths' social skills, acceptance of differences, respecting diversity, personal empowerment 
                                and self-confidence.</p>
                        </div>

                    <!--The Homework Club-->
                    <button type="button" class="BtnCollapisble">The Homework Club</button>
                        <div class="panel">
                            <p>The Homework Club is an after-school mentoring program offered to boys and girls in school age who 
                                require academic support and would benefit from one-on-one homework mentoring with a caring youth 
                                volunteer. The Homework Club meets for one hour per week after school from October to May.</p>
                        </div>
                    
                     <!--Youth B2B Project-->
                    <button type="button" class="BtnCollapisble">Youth B2B Project</button>
                        <div class="panel">
                            <p>The project will target at-risk youth participating in the Youth Job Connection (YJC) and Youth 
                                Job Connection –Summer (YJCS) Programs, which include 60 hours of pre-employment training and 
                                paid work placement funded by Employment Ontario. Participants are youth with barriers including 
                                lack of soft skills and an understanding of business environments, have experienced challenging 
                                life circumstances, including those who may have barriers due to refugee experience, mental health 
                                and post traumatic issues. </p>
                        </div>
            </div>

            <!---------Youth Services--------->
        
            <!---------Resettlement And Refugee Services----------->
            <button type="button" class="BtnCollapisble">Resettlement and Refugees Services</button>
            <div class="panel">
                <p>The program provides a range of case management services to government assisted and privately sponsored refugees. 
                    It offers ongoing support to refugee families by providing needs assessments, service planning, referrals, 
                    linkages, follow-up and service coordination for 12 months after arrival to ensure that their needs are met. 
                    The project works with partners to facilitate access to specialized services, including mental health case 
                    management, parenting supports, and school-based programming to support academic success. Project activities:</p>
            </div>

            <!----------Services for Seniors------------>
            <button type="button" class="BtnCollapisble">Services for Seniors</button>
                <div class="panel">
                    <p>We have developed a number of initiatives and activities to support and engage our senior community.   </p>

                    <!--Post Discharge Project-->
                    <button type="button" class="BtnCollapisble">Post Discharge Project</button>
                        <div class="panel">
                            <p>This program works to support seniors and marginalised individuals (due to immigration or income status) 
                                after discharge from Etobicoke General Hospital,  Brampton Civic Hospital and St Joseph Health Centre. 
                                It is intended to promote independence and well-being of participants through connection to local 
                                community resources for physical, mental, emotional and social well-being. The program includes reassurance 
                                checks, friendly visits for home bound clients, and connections to community resources the individual might 
                                not otherwise have.</p>
                        </div>

                    <!--New Horizons for Senior Programs-->
                    <button type="button" class="BtnCollapisble">New Horizons for Senior Programs</button>
                        <div class="panel">
                            <p>The New Horizons for Seniors Program: Seniors Connected</p>
                        </div>

                
                </div>
         <button type="button" class="BtnCollapisble">Family Violence and Addiction</button>
                <div class="panel">
                    <p>Polycultural provides several programs addressing violence and addiction. 
                        The programs aims to assist our community families to come over their violence 
                        and/or addiction problems. Below are some of the programs we deliver for 
                        Violence and Addiction:</p>

                    <!--Family Support Program-->
                    <button type="button" class="BtnCollapisble">Family Support Program</button>
                        <div class="panel">
                            <p>The program works to achieve access to mental health, addiction services, financial 
                                assistance, housing and family counselling services for local communities. Program 
                                activities include linguistically and culturally appropriate supportive counselling, 
                                connecting to community resources and services, interpretation and case management.</p>
                        </div>

                    <!--Partners Assult Responce Program-->
                    <button type="button" class="BtnCollapisble">Partners Assult Responce Program(PAR)</button>
                        <div class="panel">
                            <p>The Partner Assault Response (PAR) program is a Domestic Violence Court initiative 
                                that delivers a specialized community-based group education/counselling program to 
                                offenders who have been mandated by the court to attend the PAR program in response 
                                to a criminal charge involving domestic violence. </p>
                        </div>
                    
                    <!--Problem Gambling Counseling-->
                    <button type="button" class="BtnCollapisble">Problem Gambling Counseling</button>
                        <div class="panel">
                            <p>Service include culturally and linguistically appropriate gambling awareness, education 
                                and counseling services for immigrants, refugees and ethno-cultural population of 
                                the Polish, Russian and Urdu speaking community in the GTA. Service includes culturally 
                                and linguistically appropriate prevention and counselling. Services provided in partnership 
                                with Centre for Addiction and Mental Health to Polish and Russian speaking community members.</p>
                        </div>
                </div>

                <!----------Health and Wellness---------->
            <button type="button" class="BtnCollapisble">Health and Wellnes</button>
                <div class="panel">
                    
                    <p>Health and Wellness programs are offered through partnerships with various public organizations and associations. 
                        They address such matters as healthy life-style and wellbeing. Delivered in the form of group sessions and 
                        weekly gatherings they target all family members from children to seniors. Participants get an opportunity 
                        to make friends, network, learn, and remain active and healthy.Health and Wellness programs are offered 
                        through partnerships with various public organizations and associations. They address such matters as 
                        healthy life-style and wellbeing. Delivered in the form of group sessions and weekly gatherings they target 
                        all family members from children to seniors. Participants get an opportunity to make friends, network, learn, 
                        and remain active and healthy.</p>

                <!--Multicultural Women's Wellness Program-->
                <button type="button" class="BtnCollapisble">Multicultural Women's Wellness Program</button>
                    <div class="panel">
                        <p>This program is delivered in partnership with Canadian Mental Health Association. The goal of the Multicultural 
                            Women Wellness Program is to promote the well-being of women who are socially isolated, experiencing
                            cultural and linguistic barriers, and/or may be at risk of mental health problems due to difficult life 
                            circumstances. It is a safe place where women can meet, make friends, network, learn, remain active and have fun.</p>
                    </div>

                <!--Sheridan Neighbourhood Family Program-->
                <button type="button" class="BtnCollapisble">Sheridan Neighbourhood Family Program</button>
                    <div class="panel">
                        <p>The Sheridan Neighbourhood Family programs supports families living in the Sheridan-Clarkson neighbourhood 
                            (which is considered a high need and priority neighbourhood) to receive help in starting up their own businesses, 
                            as well assists clients in finding employment. At the same time there is a need for a community centre as none 
                            of the existing community centres are accessible for residents. We believe that both elements are key in poverty 
                            reduction in the Sheridan-Clarkson area.</p>
                    </div>

                <!--Crisis Counselling-->
                <button type="button" class="BtnCollapisble">Crisis Counselling</button>
                    <div class="panel">
                        <p>Polycultural provides short-term counselling services for children, youth, and adults at no cost. We provide 
                            counselling services and support for people facing various life challenges such as:</p>
                    </div>

                </div>

                 <!------------Commissioner Services------------>
            <button type="button" class="BtnCollapisble">Commissioner Services</button>
                <div class="panel">
                     <p>Commissioners of Oath are appointed by the Ontario Ministry of Attorney General to certify various types of 
                            declarations, administer oaths and certify copies of documents. Our Commissioners' certifications are 
                            recognized by most Canadian institutions.</p>
                 </div>

            <!----------Settlement Counselling------------>
            <button type="button" class="BtnCollapisble">Settlement Counselling</button>
                <div class="panel">
                    <p>We can help you in the process of making a transition to new life in Canada. We can guide you in the maze of 
                        information, community and government services.</p>

                    <!--Newcomer Settlement Program-->
                    <button type="button" class="BtnCollapisble">Newcomer Settlement Program</button>
                        <div class="panel">
                            <p>Services delivered under the Newcomer Settlement Program (NSP) facilitate the social and economic 
                                integration of newcomers to Ontario. The ultimate outcome of the program is to help newcomers become 
                                fully engaged in all aspects of Canadian life – social, economic, political and cultural. Funding
                                will support the delivery of settlement support services. General Settlement and Integration Service 
                                Activities</p>
                        </div>
                </div>
            
            <!----------Transition to Employment----------->
            <button type="button" class="BtnCollapisble">Transition to Employment</button>
                <div class="panel">
                    <p>Transition to Employment programs have been developed to support individuals, including internationally-trained 
                        professionals and trades people in finding their pathways to employment in Canada. During workshops, 
                        individual coaching sessions, mentorships and work placements participants develop their own action plans,
                        build effective self-presentation skills, job search and networking skills.</p>

                    <!--Career Exploration & Employment Assistance Program- Employment Essentials-->
                    <button type="button" class="BtnCollapisble">Career Exploration & Employment Assistance Program- Employment Essentials</button>
                        <div class="panel">
                            <p>The Career Exploration & Employment Assistance Program (CEEAP) is designed for Ontario Works recipients 
                                with an extended history of unemployment, multiple barriers to employment, and those who are unclear 
                                about career pathways or pathways to employment.</p>
                        </div>
                    
                    <!--TRIEC Mentorship-->
                    <button type="button" class="BtnCollapisble">TRIEC Mentorship</button>
                        <div class="panel">
                            <p>Are You a Foreign-Trained Professional? TRIEC Mentoring Partnership helps immigrant professionals reconnect 
                                with their careers with the help of a mentor who works in their field in Canada.</p>
                        </div>
                    
                    <!--Excelling in Customer Service Program-->
                    <button type="button" class="BtnCollapisble">Excelling in Customer Service Program</button>
                        <div class="panel">
                            <p>This  program assists women to obtain knowledge and develop skills needed for employment in the customer 
                                    service/ food and beverage service sectors.</p>
                        </div>

                </div>
        
        
        
        
        
        */