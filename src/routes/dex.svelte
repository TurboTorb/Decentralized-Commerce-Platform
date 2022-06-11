<script>
    import Button from '../button.svelte';
    import Card from '../card.svelte';
    import { goto } from '$app/navigation';
    import { browser } from '$app/env';
    
   //  function handleClick() {
   //      //TODO: Handle this click
   //      console.log("handling click!");
   //      goto('/dapp/dex#swap');
   //  }

    let swap = true;
    let pools = false;

    $: console.log("swap: ", swap);
    $: console.log("pools: ", pools);
    
    function handleClick() {
        //TODO: Handle this click
        console.log("handling click!");
    }

    function toggle() {
        if (browser) {
            console.log("toggling!");
            pools = !pools; 
            swap = !swap;
        }
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
                       <h3>DEX</h3>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <!-- end inner page section -->
        <!-- arrival section -->
        <!-- <section class="arrival_section">
           <div class="container">
              <div class="box">
                 <div class="arrival_bg_box"> -->
                    <!-- <img src="src/images/arrival-bg.png" alt=""> -->
                 <!-- </div>
                 <div class="row">
                    <div class="heading_container remove_line_bt">
                        <h2>
                            Swap your tokens!
                        </h2>
                    </div>
                    <p style="margin-top: 20px;margin-bottom: 30px;">
                        You'll want some of our platform token to buy stuff with. Swap all most the popular crypto on our DEX! Provide liquidity in the DEX and receive a portion of the trading fees!
                    </p>
                    <Button type="danger" on:click={handleClick}>
                        Enter DEX
                    </Button>
                </div>
              </div>
           </div>
        </section> -->
        <!-- end arrival section -->

        <!-- inner page section -->
    <section class="inner_page_head bg-secondary">
      <div class="container_fuild">
          <div class="row">
              <div class="col-md-12">
              <div class="full text-xl font-bold">
                  <span class="px-5">
                      <a href="#swap" class="text-white" on:click={toggle}>Swap</a>
                  </span>
                  <span class="px-5">
                      <a href="#pools" class="text-white" on:click={toggle}>Pools</a>
                  </span>
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
              {#if swap && !pools}
                  <!-- <div>
                      <div class="heading_container remove_line_bt">
                          <h2>
                              Swap your tokens!
                          </h2>
                      </div>
                      <p style="margin-top: 20px;margin-bottom: 30px;">
                          Click below to swap
                      </p>
                      <Button type="danger" on:click={handleClick}>
                          Swap Now
                      </Button>
                  </div> -->
                  <Card
                  className="card shadow-lg border-0 text-center mb-4 bg-secondary"
                  gradient="danger"
                  headerClasses="bg-transparent"
                  bodyClasses="pr-lg-4"
                  footerClasses="bg-transparent">
                        <div slot="header" class="text-left text-light">
                            Swap
                        </div>
                        <div class="card-body">
                            <div style="border-color: blue; border: solid;">
                                <input placeholder="0.0"/>
                                <input placeholder="ETH"/>
                            </div>
                            <div style="border-color: blue; border: solid; margin-bottom: 30px;">
                                <input placeholder="0.0"/>
                                <input placeholder="BTC"/>
                            </div>
                            <Button type="danger" on:click={handleClick}>
                                Swap Now
                            </Button>
                        </div>

                  </Card>
              {:else if pools && !swap}
                  <div>
                      <div class="heading_container remove_line_bt">
                          <h2>
                              Deposit Liquidity!
                          </h2>
                      </div>
                      <p style="margin-top: 20px;margin-bottom: 30px;">
                          Click below to deposit
                      </p>
                      <Button type="danger" on:click={handleClick}>
                          Deposit Now
                      </Button>
                  </div>
              {/if}
          </div>  
      </div>
  </section>
  <!-- end arrival section -->
    
     </body>