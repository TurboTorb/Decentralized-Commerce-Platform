<script>
    import Button from './button.svelte';
    import { onMount } from 'svelte';

    export let metamask = false;
    export let connectDisabled = false;

    let onboarding;

    //This will start the onboarding proccess
    const onClickInstall = () => {
        connectDisabled = true;
        //On this object we have startOnboarding which will start the onboarding process for our end user
        if (onboarding) onboarding.startOnboarding();
    };

    onMount(() => {
        // onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    });

</script>

{#if onboarding}
<Button type="primary" size="sm" id="connectButton" disabled={connectDisabled}>Onboarding...</Button>
{:else if metamask}
<Button type="primary" size="sm" id="connectButton" disabled={connectDisabled}>CONNECT</Button>
{:else}
<Button type="info" size="sm" id="connectButton" disabled={connectDisabled} on:click={onClickInstall}>Click here to install MetaMask</Button>
{/if}