# Miguel-Maldonado
<!DOCTYPE HTML>
<html>
    <head>
        <title>My first website</title>
        <style>
          body {
                background: rgb(125, 198, 205);
                color: rgb(45, 45, 45);
                padding: 10px;
                font-family: arial;
            }
            
            header {
                font-size: 1.5em;
                font-weight: bold;
            }
            #all-contents {
                max-width: 900px;
                margin: auto;
            }
    
            /* navigation menu */
            nav {
                background: rgb(106, 90, 205);
                margin: 9 auto;
                display: flex;
                padding: 10px;
            }
            nav header {
                display: flex;
                align-items: center;
                color: rgb(100, 100, 100);
                flex: 1;
            }
            nav ul {
                list-style-image: none;
            }
            nav li {
                display: inline-block;
                padding: 0 10px;
            }
            nav a {
                text-decoration: none;
                color: #fff;
            }
    
            /* main container area beneath menu */
            main {
                background: rgb(0, 205, 0);
                display: flex;
            }
            .sidebar {
                margin-right: 25px;
                padding: 10px;
            }
            .sidebar img {
                width: 200px;
                border: 10px solid orange;
                border-radius: 30px;
            }
            .content {
                flex: 1;
                padding: 15px;
            }
            .interests header {
                font-size: 1.25em;
            }
        </style>
    </head>
    
    <body>
         <div id="all-contents"> 
            <nav>
            <header>Miguel's first website</header>
            <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                </ul>
            </nav>
            
            <main>
            <div class="sidebar">
                <img src="https://pbs.twimg.com/profile_images/378800000613619812/33fca8e04fd3487df63ccf4fb5dda51f_400x400.jpeg" width="200" height="200">
                </div>
    
                <div class="content">
                    <header>Miguel Maldonado</header>
                <p>Student at helen cox</p>
                <section class="interests">
                        <header>Interests</header>
                        <ul>
                            <li>Writing</li>
                            <li>Photagraphy</li>
                            <li>Comics</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    </body>
</html>
