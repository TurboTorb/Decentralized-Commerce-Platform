<script>
    import Button from '../button.svelte';
    
    function handleClick() {
        //TODO: Handle this click
        console.log("handling click!");
    }
    
    </script>
    
    <head>
        <!-- Basic -->
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Mobile Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- Site Metas -->
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Famms - Fashion HTML Template</title>
     </head>
     <body class="sub_page">
        <!-- inner page section -->
        <section class="inner_page_head bg-danger">
           <div class="container_fuild">
              <div class="row">
                 <div class="col-md-12">
                    <div class="full">
                       <h3>Contact</h3>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <!-- end inner page section -->
        <!-- arrival section -->
        <section class="arrival_section">
           <div class="container">
              <div class="box">
                 <div class="arrival_bg_box">
                    <!-- <img src="src/images/arrival-bg.png" alt=""> -->
                 </div>
                 <div class="row">
                    <div class="heading_container remove_line_bt">
                        <h2>
                            Email Us!
                        </h2>
                    </div>
                    <p style="margin-top: 20px;margin-bottom: 30px;">
                        Email us stuff!
                    </p>
                    <!-- <Button type="danger" on:click={handleClick}>
                        Enter DEX
                    </Button> -->
                </div>
              </div>
           </div>
        </section>
        <!-- end arrival section -->
    
     </body>