<script >import _ from '../util/convert';
import { keyPressed, keyPressedCustom } from '../util/store';
import { easeInOutSin } from '../util/transition';
export let components;
export let isOpen;
export let h;
export let s;
export let v;
export let a;
export let hex;
export let toRight;
let alpha;
let isMouseDown = false;
let focused = false;
let focusMovementIntervalId;
let focusMovementCounter;
let pos;
function onClick(pos) {
    const size = toRight
        ? alpha.getBoundingClientRect().width
        : alpha.getBoundingClientRect().height;
    const boundedPos = Math.max(0, Math.min(size, pos));
    a = boundedPos / size;
}
function mouseDown(e) {
    if (e.button === 0) {
        isMouseDown = true;
        onClick(toRight ? e.offsetX : e.offsetY);
    }
}
function mouseUp() {
    isMouseDown = false;
}
function mouseMove(e) {
    if (isMouseDown)
        onClick(toRight
            ? e.clientX - alpha.getBoundingClientRect().left
            : e.clientY - alpha.getBoundingClientRect().top);
}
function keyup(e) {
    if (e.key === 'Tab')
        focused = document.activeElement.isSameNode(alpha);
    if (!e.repeat && focused)
        move();
}
function keydown(e) {
    if (focused && $keyPressedCustom.ArrowVH) {
        e.preventDefault();
        if (!e.repeat)
            move();
    }
    if (focused && !e.shiftKey && e.key === 'Tab') {
        isOpen = false;
    }
}
function move() {
    if ($keyPressedCustom.ArrowVH) {
        if (!focusMovementIntervalId) {
            focusMovementCounter = 0;
            focusMovementIntervalId = setInterval(() => {
                const focusMovementFactor = easeInOutSin(++focusMovementCounter);
                const movement = toRight
                    ? $keyPressed.ArrowRight - $keyPressed.ArrowLeft
                    : $keyPressed.ArrowDown - $keyPressed.ArrowUp;
                a = Math.min(1, Math.max(0, a + movement * focusMovementFactor));
            }, 10);
        }
    }
    else if (focusMovementIntervalId) {
        clearInterval(focusMovementIntervalId);
        focusMovementIntervalId = undefined;
    }
}
function touch(e) {
    e.preventDefault();
    onClick(toRight
        ? e.changedTouches[0].clientX - alpha.getBoundingClientRect().left
        : e.changedTouches[0].clientY - alpha.getBoundingClientRect().top);
}
$: if (typeof a === 'number' && alpha)
    pos = 100 * a;
</script>

<svelte:window
	on:mouseup={mouseUp}
	on:mousemove={mouseMove}
	on:keyup={keyup}
	on:keydown={keydown}
/>

<svelte:component this={components.alphaWrapper} {focused} {toRight}>
	<div
		tabindex="0"
		class="alpha"
		class:to-right={toRight}
		style="--alpha-color: {hex.substring(0, 7)}"
		bind:this={alpha}
		on:mousedown={mouseDown}
		on:touchstart={touch}
		on:touchmove={touch}
		on:touchend={touch}
	>
		<svelte:component
			this={components.alphaIndicator}
			{pos}
			{toRight}
			color={_.hsv2Color({ h, s, v, a })}
		/>
	</div>
</svelte:component>

<style>
	.alpha:after {
		position: absolute;
		content: '';
		inset: 0;
		background: linear-gradient(#00000000, var(--alpha-color));
		z-index: 0;
	}
	.to-right:after {
		background: linear-gradient(0.25turn, #00000000, var(--alpha-color));
	}
	.alpha {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
		background-size: 10px 10px;
		background-position: 0 0, 5px 5px;
		outline: none;
	}
</style>
