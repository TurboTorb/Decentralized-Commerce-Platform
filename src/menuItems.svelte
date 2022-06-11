<script>
import { layout } from './stores.js'

export let items = [];

</script>

{#each items as item, idx}
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
{/each}