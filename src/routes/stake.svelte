<script>
import Button from '../button.svelte';
import Modal from '../modal.svelte';
import Input from '../input.svelte';
import { goto } from '$app/navigation';

let show = false;
let stakedAmount = 0;
let newStake = 0;

$: console.log("newStake: ", newStake);

function handleClick() {
    //TODO: Handle this click
    console.log("handling click!");
    show = true;
}

function stake() {
   console.log("staking!");
   // TODO: implement stake
}

// When a user stakes a token they will be given a veToken in return.
// Anyone with a veToken in their wallet will recieve rewards (10% of every transaction is split amongst veToken holders).
// A veToken stores the lock time of the locked/staked token it represents
// A Token can be locked for any period of time between 1 week and 4 years (ie. CRV model).
// The larger the lock time the more the rewards this veToken will receive.
// Reward for each veToken will be calculated as:
// Reward = (10% of transaction / total number of locked time(in weeks) of all veTokens) * the sqaure root of the number of weeks the veToken is locked.
// This way a token locked for 52 weeks will receive 7.2x the reward as a token locked for 1 week, 52 weeks in a row.
// A locked/staked token will be unlocked and available to withdraw (in exchange for a veToken) when the lock time has passed.


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
                   <h3>Stake</h3>
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
                        Stake with us and earn!
                    </h2>
                </div>
                <p style="margin-top: 20px;margin-bottom: 30px;">
                    Stake your Platform tokens here and receive escrow tokens in return! Just by holding escrow tokens you will receive more platform tokens every few seconds! We pay stakers a portion of our revenue on every transaction, all you have to do is stake!
                </p>
                <Button type="danger" on:click={handleClick}>
                    Stake Now
                </Button>
            </div>
          </div>
       </div>
    </section>
    <!-- end arrival section -->

    <Modal bind:show={show} size="lg" modalClasses="modal-danger" modalContentClasses="bg-danger" gradient={false}>
      <h6 slot="header" class="modal-title text-white">
        Stake
      </h6>
      <div>
        <p style="color: white;">
            You have staked {stakedAmount} tokens. 
            <br> 
            The amount of rewards you receive per token is based on the amount of time it is locked in the escrow. 
            <br>
            The longer you stake, the more rewards you will receive on every transaction.
        </p>
      </div>
      <div slot="footer" class="w-100 d-flex text-center justify-content-between">
         <Button type="danger" className="text-white mr-auto" on:click={() => show = false}>
            Close
        </Button>
        <Button type="danger" className="text-white ml-auto" on:click={stake}>
         Stake
      </Button>
      <Input placeholder="0" type="number" bind:value={newStake} />
      <span style="color: black;">
         Tokens
      </span>
      </div>
    </Modal>

 </body>