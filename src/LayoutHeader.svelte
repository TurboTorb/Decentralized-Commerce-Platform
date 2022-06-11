<script>
   import { onMount } from 'svelte';
   import Button from './button.svelte';
   // import ConnectButton from './connectbutton.svelte';
   import MenuItems from './menuItems.svelte';
   import ColorPicker from 'svelte-awesome-color-picker/ColorPicker.svelte';
   import { browser } from '$app/env';
   import { layout } from './stores.js';

   export let provider;
   // export let metamask;
   export let connectDisabled = false;

   let connected = false;
   let btnLoading = false;


   //TODO: when I disconnect my wallet from the dapp this change is not reflected in UI
   async function connectWallet() {
      // console.log("in connect function");
      if (browser) {
         console.log("browser is true");
         if (window.ethereum) {
            console.log("window.ethereum is truthy");
            try {
               window.web3 = new Web3(ethereum);
               await window.ethereum.enable();
               connected = window.ethereum.isConnected();
            } catch (error) {
               connected = false;
            }
         }
      }
   }

   function onClickConnect() {
      if (browser) {
         btnLoading = true;
         promise = connectWallet();
         // connectWallet();
         btnLoading = false;
      }
   }

   //  $: console.log("browser: ", browser);
    $: promise = browser && connectWallet();
    $: connected = browser && window.ethereum ? window.ethereum.isConnected() : false;
    $: if (browser) console.log("window.ethereum: ", window.ethereum);

    onMount(() => {
      //  onClickConnect();
    })
</script>

<div>browser: {browser} metamask: {connected}</div>
<div class="hero_area">
   <!-- header section strats -->
   <header class="header_section" style="background-color: {$layout.headerColor.hex};">
      {#if $layout.editing}<span style="color: black;"><ColorPicker bind:color={$layout.headerColor}/></span>{/if}
       <div class="container whitespace-nowrap">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
             <!-- <a class="navbar-brand" href="/" sveltekit:prefetch><img width="250" src="src/images/logo.png" alt="#" /></a> -->
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class=""> </span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <!-- {#each $layout.menuItems as item, idx}
                     {#if item. nestedItems && item.nestedItems.length > 0}
                        <li class="nav-item dropdown active">
                           <a class="nav-link dropdown-toggle" href="#!" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="true"> <span class="nav-label">{item.name}<span class="caret"></span></span></a>
                           <ul class="dropdown-menu">
                              {#each item.nestedItems as nested}
                              <li><a href={nested.href} sveltekit:prefetch>{nested.name}</a></li>
                              {/each}
                           </ul>
                        </li>
                        {:else}
                        <li class="nav-item">
                           {#if $layout.editing}
                              <input placeholder={item.name}/>
                           {:else}
                              <a class="nav-link" href="{item.href}" sveltekit:prefetch>{item.name}<span class="sr-only">(current)</span></a>
                           {/if}
                        </li>
                     {/if}
                  {/each} -->
                  <MenuItems bind:items={$layout.menuItems}/>
                  <li class="nav-item">
                     <a class="nav-link" href="#!">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                           <g>
                              <g>
                                 <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                              </g>
                           </g>
                           <g>
                              <g>
                                 <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                    C457.728,97.71,450.56,86.958,439.296,84.91z" />
                              </g>
                           </g>
                           <g>
                              <g>
                                 <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                              </g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                        </svg>
                     </a>
                  </li>
                  <form class="form-inline">
                     <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                     <i class="fa fa-search" aria-hidden="true"></i>
                     </button>
                  </form>
                  {#if provider}<div>{provider}</div>{/if}
                  {#if !connected}
                  <Button type="primary" size="sm" id="connectButton" buttonColor={'#007bff'} disabled={connectDisabled} loading={btnLoading} on:click={onClickConnect}>{btnLoading ? "Connecting" : "Connect"}</Button>
                  {:else if browser && !window.ethereum}
                  <Button type="info" size="sm" id="connectButton" disabled={connectDisabled} on:click={onClickConnect}>Click here to install MetaMask</Button>
                  {:else if browser && connected}
                  <Button type="info" size="sm" id="connectButton" disabled={true}>Connected</Button>
                  {/if}
               </ul>
            </div>
         </nav>
      </div>
   </header>
   <!-- end header section -->
</div>