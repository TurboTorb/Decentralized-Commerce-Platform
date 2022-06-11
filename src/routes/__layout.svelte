<script>
    import "../app.css";
    import LayoutHeader from '../LayoutHeader.svelte';
    import LayoutFooter from '../LayoutFooter.svelte';
    import Button from '../button.svelte';
    import { layout } from '../stores.js';
    import { session } from '$app/stores';
    import { onMount } from 'svelte';
    import { browser, dev } from '$app/env';
    // import MetaMaskOnboarding from '@metamask/onboarding';
    import { defaultEvmStores, web3, selectedAccount, connected, chainId, chainData } from 'svelte-web3';

    let provider;
    let connectDisabled = false;

    //We create a new MetaMask onboarding object to use in our app
    
    //This will start the onboarding proccess
    // const onClickInstall = () => {
    //     connectDisabled = true;
        //On this object we have startOnboarding which will start the onboarding process for our end user
        // onboarding.startOnboarding();
    // };


    
    onMount(async() => {
       
    });

    layout.set({
        admin: true,
        editing: false,
        menuItems: [
            { name: 'Home', href: '/' },
            { name: 'Products', href: 'products' },
            { name: 'Stake', href: 'stake' },
            { name: 'DEX', href: 'dex' },
            { name: 'Our Team', href: 'ourteam' },
            { name: 'Contact', href: 'contact' },
            { name: 'Pages', href: '#!', nestedItems: [
                { name: 'About', href: 'about' }, 
                { name: 'testimonials', href: 'testimonials' }
            ]}
        ],
        headerColor: {
            "r": 246,
            "g": 240,
            "b": 220,
            "a": 1,
            "hex": "#f6f0dcff",
            "h": 46.15384615384614,
            "s": 0.10569105691056907,
            "v": 0.9647058823529412
        },
        footerColor: {
            "r": 246,
            "g": 240,
            "b": 220,
            "a": 1,
            "hex": "#f6f0dcff",
            "h": 46.15384615384614,
            "s": 0.10569105691056907,
            "v": 0.9647058823529412
        }
    })

    $: console.log("layout: ", $layout);

</script>

{#if dev}
    <div>{$defaultEvmStores} {$web3} {$selectedAccount} {$connected} {$chainId} {$chainData}</div>
{/if}
<!-- admin: {$layout.admin} -->
{#if $layout.admin}
    <div>
        <Button type={$layout.editing ? 'success' : 'primary'} size="sm" id="editButton" on:click={() => {$layout.editing = !$layout.editing}}>{$layout.editing ? 'Save' : 'Edit'}</Button>
    </div>
{/if}
<LayoutHeader {provider} {connectDisabled} />
<slot />
<LayoutFooter/>
