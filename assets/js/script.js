// HEADER REFERENCES
const headerRef = document.querySelector("#header");
const headerImg = document.createElement("div");
const headerIcon = document.createElement("svg")
const headerLogo = document.createElement("a");
const headerList = document.createElement("ul");
const headerBtn = document.createElement("div");

// MAIN REFERENCES
const mainRef = document.querySelector("#main");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const section3 = document.createElement("section");
const section4 = document.createElement("section");
const section5 = document.createElement("section");

// FOOTER REFERENCES
const footerRef = document.querySelector("footer")

// VARIABLES
let HEADER_ARRAY = [];
const MAIN_ARRAY = [];
const FOOTER_ARRAY = [];
const STORE_KEY = "";

const HEADER_STORE_KEY = "header";
const MAIN_STORE_KEY = "main";
const FOOTER_STORE_KEY = "footer";

// display and save header to localstorage
const displayHeader = () =>{

    HEADER_ARRAY.push(
        headerLogo.innerHTML = 
        `<img src="./assets/icons/logo_small.png" alt="logo_small" class="small_logo">`,
    headerIcon.innerHTML = 
        ` <svg class="svg" width="45px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon glyph"><path d="M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style="fill:#00000080"></path><path d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style="fill:#00000080"></path><path d="M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z" style="fill:#00000080"></path></svg>`,
    headerList.innerHTML =
        `
            <li><a class="header_link" href="#">Home</a></li>
            <li><a class="header_link" href="#">Features</a></li>
            <li><a class="header_link" href="#">Pricing</a></li>
            <li><a class="header_link" href="#">Blog</a></li>
            <li><a class="header_link" href="#">Contact Us</a></li>
        `,
    headerBtn.innerHTML = 
        `
            <div>
                <button class="secondary_bg_color btn">Login</button>
            </div>
            <div>
                <button class="primary_bg_color btn">Register</button>
            </div>
        `    

    )

    // adding classes on tags
    headerImg.classList.add("header_img","flex");
    headerList.classList.add("header_list","display_list");
    headerIcon.classList.add("svg");
    headerBtn.classList.add("header_btn","flex");
    headerLogo.classList.add("header_logo");

    // Appending All children
    headerImg.append(headerLogo,headerIcon)    
    headerRef.append(headerImg,headerList,headerBtn)


    // saving Array to localStorage
    localStorage.setItem(HEADER_STORE_KEY,JSON.stringify(HEADER_ARRAY))
}

// display and save main to localstorage
const displayMain = () =>{
    MAIN_ARRAY.push(
        section1.innerHTML = 
            `
                <div class="section1-text">
                    <h1 class="secondary_font">POULTRY MANAGEMENT SOFTWARE</h1>
                    <p class="section1-p">SmartBird is a poultry farm management online app for both commercial poultry farmers and small-scale backyard poultry keepers. Track the production, management, and finances of your poultry farm. Keep track of eggs collected, bird weight, feed, vaccinations and treatments, mortality, income and expenses, and much more</p>
                    <a href="#" class="section1_link primary_bg_color primary_font">Start Your Free Trial</a>
                </div>
                <div class="section1-img">
                    <img src="./assets/images/smartbird_hero.png" alt="smartBird_hero">
                </div>
            `,
        section2.innerHTML = 
            `
                <div class="section2-header">
                    <img src="./assets/icons/icon-1.png" alt="chicken icon" class="section2-img">
                    <h2 class="section2-h2 secondary_font">SmartBird Poultry Manager</h2>
                    <p class="section2-p">Simple, easy to understand, straight to the point</p>
                </div>
                <div class="section2-cards grid">
                    <div class="card">
                        <img src="./assets/images/bag.png" alt="bag" class="section2-img">
                        <h3 class="secondary_font section2-h3">Poultry Management Records</h3>
                        <p class="primary_font">Keep track of all management activities on your poultry farm. Helps you keep track of production. At a glance, you can tell when things go wrong so that you can make corrections and keep on the right track.</p>
                    </div>
                    <div class="card">
                        <div class="card">
                            <img src="./assets/images/egg_basket.png" alt="egg_basket" class="section2-img">
                            <h3 class="secondary_font">Poultry Management Records</h3>
                            <p class="primary_font">Record your daily production, whether in egg collection or broiler weight gain. Get graphical reports on improvements or decreases in production. With this information, you will be able to forecast productivity</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card">
                            <img src="./assets/images/chicken_meal.png" alt="chicken_meal" class="section2-img">
                            <h3 class="secondary_font">Poultry Management Records</h3>
                            <p class="primary_font">Keep track of your daily, weekly, monthly and annual expenses, income, and profits. This will include direct costs and indirect costs</p>
                        </div>
                    </div>
                </div>     
            `, 
        section3.innerHTML = 
            `
                <div class="container grid">
                    <div>
                        <img src="./assets/images/smartbird_about.png" alt="" class="section3img">
                    </div>
                    <div class="section3_txt">
                        <h3 class="section3_header secondary_font">Maximize on productivity</h3>
                        <p class="primary_font section3-p">Enter your daily production records into SmartBird Poultry Manager. Track any decline in productivity daily, so as to make a correction, ensuring you reach your goals</p>
                        <button class="primary_bg_color btn section3_btn primary_font">Start Now</button>
                    </div>
                </div>
            `,
        section4.innerHTML = 
            `
                <div class="section4-header">
                    <img src="./assets/icons/icon-1.png" alt="chicken icon" class="section2-img">
                    <h2 class="section4-h2 secondary_font">What is SmartBird</h2>
                    <p class="section4-p">No. It is not a bird</p>
                    <h3 class="section4-h3 secondary_font">SmartBird is a complete poultry farm management software</h3>
                    <p class="section4-p2">For Small farms with tens or hundreds of chickens, SmartBird poultry records management software assists in managing your daily activities such as feeding, egg collection, mortalities, expenses, income, and a lot more</p>
                    <p class="section4-p2">For medium and large farms with thousands and hundreds of thousands of chickens, SmartBird will manage all your poultry records, with multiuser features enabling you to delegate record entries to your workers and partners. </p>
                    <p class="section4-p2">The system gives you the full picture, including management records, production records, and financial records.</p>
                </div>
                <div class="section4-card">
                    <article>
                        <h2 class="secondary_font section4-card-h2"> SmartBird is a layer farm management software</h2>
                        <p class="section4-p3">When keeping chickens for eggs, you want to be able to tell if the feed is being converted into eggs. A good feed-to-egg conversion ratio is desirable. With SmartBird, you will be able to keep feed records, egg collection records, egg weight records, and much more. <br> With all this data in place, you will be able to generate reports that show you if your efforts are being rewarded with quality eggs. SmartBird layer management software does not stop there. You can track egg sales and even filter down to egg sales to a specific customer.</p>
                    </article>
                    <article>
                        <h2 class="secondary_font section4-card-h2">SmartBird is a broiler farm management software</h2>
                        <p class="section4-p3">SmartBird allows you to manage your broiler chicken business with ease. <br> <br> Be it a small or large broiler farm, SmartBird will assist in keeping broiler flock records, broiler feed records, broiler weight, and much more. <br> The system generates reports, including broiler Feed Conversion Ratio, that can be generated on the fly to give you a clear picture of the performance of your meat birds. <br> <br> This information will enable you to take any corrective measures to ensure that the broiler chickens achieve maximum growth ratio and attain the target weight in time for processing.</p>
                    </article>
                    <article>
                        <h2 class="secondary_font section4-card-h2">SmartBird is a poultry farm financial management software</h2>
                        <p class="section4-p3">You will want to know how much it costs you to produce an egg or a kilogram/pound of chicken meat <br> <br> You also want to track expenses. From direct expenses such as feed, medication, and vaccinations to indirect expenses such as repair and utilities. <br> SmartBird lets you keep these records and allows you to generate reports that will help you tell the financial health of your poultry business.</p>
                    </article>
                    <article>
                        <h2 class="secondary_font section4-card-h2">SmartBird works for any size of poultry farm</h2>
                        <p class="section4-p3">SmartBird works for small, medium-sized, and large poultry farms. <br> <br>  You can keep records of any poultry bird including chickens, ducks, quails, geese, turkeys, parrots, etc. <br> SmartBird works will work for you in helping you quantify your efforts in terms of your input in your flock and output from your flock.</p>
                    </article>
                </div>
            `, 
        section5.innerHTML = 
            `
                <div class="section5-header">
                    <img src="./assets/icons/icon-1.png" alt="chicken icon" class="section2-img">
                    <h2 class="section2-h2 secondary_font">Pricing</h2>
                    <p class="section2-p">Take advantage of our introductory pricing</p>
                </div>
                <div class="section5-cards container ">
                    <div class="section5-card card1">
                        <h4 class="secondary_font h4">Standard</h4>
                        <h6 class="primary_font">Monthly Plan</h6>
                        <h4 class="primary_font">$29</h4>
                        <h5 class="primary_font">Manage your poultry business in a smart way.</h5>
                        <hr>
                        <ul class="section5_list primary_font">
                            <li>Record expenses in your poultry farm</li>
                            <li>Record income from your poultry business</li>
                            <li>Keep feeding records</li>
                            <li>Keep vaccination and treatment records</li>
                            <li>Keep mortality records</li>
                            <li>Keep bird weight records</li>
                            <li>Keep daily egg collection records</li>
                            <li>Keep flock management records</li>
                            <li>Generate financial reports. Filter the reports based on the flock, customer, or suppliers.</li>
                            <li>Generate production reports</li>
                            <li>Support via email</li>
                            <li>Manage customer data</li>
                            <li>Manage supplier data</li>
                            <li>Unlimited number of birds</li>
                            <li>Up to 5 users (coming soon)</li>
                            <li>Android and iPhone Applications (coming soon)</li>
                        </ul>
                        <button class="secondary_bg_color btn primary_font section5-btn">Start Now</button>
                        <h6 class="primary_font section5-h6">(Total of $348 USD per year, billed monthly. Includes a 14-day free trial)</h6>
                    </div>
                    <div class="section5-card">
                        <h4 class="secondary_font h4">Standard</h4>
                        <h6 class="primary_font">Annual Plan</h6>
                        <h4 class="primary_font">$279</h4>
                        <h5 class="primary_font">All the features of the standard plan, at a great discount.</h5>
                        <hr>
                        <button class="secondary_bg_color btn primary_font section5-btn">Start Now</button>
                        <h6 class="primary_font section5-h6">Save 20% Includes a 14-day free trial)</h6>
                    </div>
                    <div class="section5-card">
                        <h4 class="secondary_font h4">Life Time Deal</h4>
                        <h6 class="primary_font">Lifetime Offer (available only in 2022)</h6>
                        <h4 class="primary_font">Sold out</h4>
                        <h5 class="primary_font">All the features of the standard plan and up to a total of 100,000 birds or 99 years, whichever comes first.</h5>
                        <hr>
                        <button class="secondary_bg_color btn primary_font section5-btn">Start Now</button>
                        <h6 class="primary_font section5-h6">Includes a 14-day free trial)</h6>
                    </div>
                </div>
            `       
    )

    // adding classes on tags
    section1.classList.add("section1","grid","container");
    section2.classList.add("section2","container");
    section3.classList.add("section3");
    section4.classList.add("section4","container");
    section4.classList.add("section5");

    // Appending All children
    mainRef.append(section1,section2,section3,section4,section5)

    // saving Array to localStorage
    localStorage.setItem(MAIN_STORE_KEY,JSON.stringify(MAIN_ARRAY))
}

// display and save footer to localstorage
const displayFooter = () =>{
    FOOTER_ARRAY.push(
        footerRef.innerHTML +=
        `
            <div class="container footer">
                <article class="article1">
                    <h2 class="secondary_font footer_header">about smartbird</h2>
                    <p class="footer_p">Small, medium or large scale poultry farming? Chicken, Geese, Ducks, Turkeys, Parrots, Quails?</p>
                    <p class="footer_p">SmartBird Poultry Management Software will assist you in keeping track of all activities in your poultry farm, whether it is a small backyard operation or a fully fledged poultry farm</p>
                </article>
                <article class="article2">
                    <h2 class="secondary_font footer_header">navigation</h2>
                    <ul class="footer_list primary_font">
                        <li><a class="footer_link" href="#">Home</a></li>
                        <li><a class="footer_link" href="#">Contact Us</a></li>
                        <li><a class="footer_link" href="#">Features</a></li>
                        <li><a class="footer_link" href="#">Terms of Service and Privacy Policy</a></li>
                        <li><a class="footer_link" href="#">Pricing</a></li>
                        <li><a class="footer_link" href="#">Login</a></li>
                        <li><a class="footer_link" href="#">Facebook Support Community</a></li>
                    </ul>
                </article>
                <article class="article3">
                    <h2 class="secondary_font footer_header">newsletter</h2>
                    <p class="footer_p">Never miss any news on new features, offers and promotions. Subscribe to our free email newsletter</p>
                    <input type="text"><span><svg class="bgCarrier" width="24px" height="45px" viewBox="-10.88 -10.88 53.76 53.76" id="i-send" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.536"><g class="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-10.88" y="-10.88" width="53.76" height="53.76" rx="0" fill="#f36f54" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <path d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20"></path> </g></svg></span>
                </article>
                <article class="article4">
                    <h2 class="secondary_font footer_header">poultry software</h2>
                    <a href="#"><img src="./assets/icons/logo_small.png" alt="logo_small" class="small_logo"></a>
                </article>
            </div>
        `
    )

    // saving Array to localStorage
   localStorage.setItem(FOOTER_STORE_KEY,JSON.stringify(FOOTER_ARRAY))
}

// FUNCTIONS
// get data from localStorage
const getData = (STORE_KEY) =>{
    if(localStorage.getItem(STORE_KEY) !== null){
        return JSON.parse(localStorage.getItem(STORE_KEY)) 
    } return null
}

const initData = () =>{
    let header = getData(HEADER_STORE_KEY)
    if(header){
        displayHeader(HEADER_ARRAY);
    }

    let main = getData(MAIN_STORE_KEY)
    if (main) {
        displayMain(MAIN_ARRAY)
    }

    let footer = getData(FOOTER_STORE_KEY)
    if (footer) {
        displayFooter(FOOTER_STORE_KEY)
    }
}


initData();
