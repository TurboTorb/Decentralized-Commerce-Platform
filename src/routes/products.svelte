<script>
    // import ColorPicker from '../ColorPicker/ColorPicker.svelte';
    import ColorPicker from 'svelte-awesome-color-picker/ColorPicker.svelte';
    import { layout } from '../stores.js'
    // import {HsvPicker} from 'svelte-color-picker';
    // import ChromaPicker from 'svelte-chroma-picker';
    // import ColorWell from 'svelte-color-well'
    // import ChromePicker from 'svelte-color/Chrome.svelte';
    // import { ColorPicker, Color } from 'svelte-colorpick';

    let color = {
        "r": 246,
        "g": 240,
        "b": 220,
        "a": 1,
        "hex": "#f6f0dcff",
        "h": 46.15384615384614,
        "s": 0.10569105691056907,
        "v": 0.9647058823529412
    };

    //Mock data, products object will be populated by graphQL call
	export let products = [
		{ name: "Men's Shirt", img: 'src/images/p1.png', price: 75 },
		{ name: 'Black Shirt', img: 'src/images/p2.png', price: 55 },
        { name: 'Dress', img: 'src/images/p3.png', price: 50 },
        { name: 'Dress', img: 'src/images/p4.png', price: 65 },
        { name: 'Dress', img: 'src/images/p5.png', price: 85 },
        { name: 'Dress', img: 'src/images/p6.png', price: 35 },
        { name: 'Dress', img: 'src/images/p7.png', price: 50 },
        { name: "Men's Shirt", img: 'src/images/p8.png', price: 55 },
        { name: "Men's Shirt", img: 'src/images/p9.png', price: 30 },
        { name: "Men's Shirt", img: 'src/images/p10.png', price: 67 },
        { name: "Men's Shirt", img: 'src/images/p11.png', price: 89 },
        { name: 'Dress', img: 'src/images/p12.png', price: 20 }
	];

</script>

<body class="sub_page">
	<!-- inner page section -->
	<section class="inner_page_head" style="background-color: {color.hex};">
        {#if $layout.editing}<span style="color: black;"><ColorPicker bind:color/></span>{/if}
		<div class="container_fuild">
			<div class="row">
				<div class="col-md-12">
					<div class="full">
						<h3>Product Grid</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- end inner page section -->
	<!-- product section -->
	<section class="product_section layout_padding">
		<div class="container">
			<div class="heading_container heading_center">
				<h2>
					Our <span>products</span>
				</h2>
			</div>
			<div class="row">
                {#each products as product}
                <div class="col-sm-6 col-md-4 col-lg-3">
					<div class="box">
						<div class="option_container">
							<div class="options">
								<a href="#!" class="option1"> Add To Cart </a>
								<a href="#!" class="option2"> Buy Now </a>
							</div>
						</div>
						<div class="img-box">
							<img src={product.img} alt="" />
						</div>
						<div class="detail-box">
							<h5>{product.name}</h5>
							<h6>${product.price}</h6>
						</div>
					</div>
				</div>
                {/each}
			</div>
			<div class="btn-box">
				<a href="#!"> View All products </a>
			</div>
		</div>
	</section>
	<!-- end product section -->
</body>
<!-- <HsvPicker bind:startColor={bgColor}/> -->
<!-- <ChromaPicker bind:color /> -->
<!-- <ColorWell bind:color type='rgb'/> -->
<!-- <ChromePicker
  class=""
  bind:color
  bind:this={chrome}
  startColor="red"
  disableAlpha={false}
  on:input={handleInput}
/> -->
<!-- <ColorPicker bind:color={color}/> -->