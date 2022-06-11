<script>
    import { createEventDispatcher } from "svelte";
  
    export let required = null;
    export let group = "";
    export let alternative = "";
    export let label = "";
    export let error = "";
    export let successMessage = "";
    export let labelClasses = "form-control-label";
    export let inputClasses = "";
    export let inputGroupClasses = "";
    export let value = "";
    export let type = "";
    export let appendIcon = "";
    export let prependIcon = "";
    export let rules = "";
    export let name = "";
    export let attrs = $$props.$$attrs;
    export let placeholder = "";
    export let id = "";
    export let autocomplete = "on";
    export let nomargin = false;
    export let strength = false;
    export let passwordStrength = "";
    let valueLen;
  
  
    // I added these to automate regex validation, formatting and styling.
    export let pattern = null; // supply a regex pattern to validate against.
    export let valid = true; // manually set the field to valid or not.
    export let validate = true; // true to validate against the pattern if one is supplied.
  
    const dispatch = createEventDispatcher();
  
    let appendSlot;
    let prependSlot;
    if ($$props.$$slots !== undefined) {
      if ($$props.$$slots.append) {
        appendSlot = $$props.$$slots.append;
      }
      if ($$props.$$slots.prepend) {
        prependSlot = $$props.$$slots.prepend;
      }
    }
    // export let baseRequired = "";
    let focused = false;
  
    function listeners() {
      return {
        ...$$props.$$listeners,
        input: updateValue,
        focus: onFocus,
        blur: onBlur
      };
    }
    function slotData() {
      return {
        focused: focused,
        error: error,
        ...$$props.$$listeners
      };
    }
    function validateInput(e) {
      value = e.target.value;
      if (pattern && pattern.trim() !== '') { 
        // if (type === 'tel') value = Utils.formatPhone(value, 10, pattern);
        if (validate) valid = new RegExp(pattern).test(value);
      }
    }
    function updateValue(e) {
      value = e.target.value;
      dispatch("input", value);
    }
    function onFocus(e) {
      focused = true;
      dispatch("focus", value);
    }
    function onBlur(e) {
      focused = false;
      if (e.target.value === "") {
        if (required === true) {
          error = "field required";
        }
      } else {
        error = "";
      }
      dispatch("blur", value);
    }
  
    function valueLength() {
      if (value) {
        valueLen = value.length
      } else {
        valueLen = 0
      }
    }
    $: valueLength(value);
  
  </script>
  
  <style>
    .valid {
      border: none;
    }
    .invalid {
      border-bottom-width: 1px;
      border-bottom-style: ridge;
      border-bottom-color: red;
    }
  
  </style>
  
  <div {rules} {name} bind={$attrs}>
    <div class="form-group" style="{(nomargin) ? 'margin: 0px' : ''}">
      <slot name="label">
        {#if label !== ''}
          <label for="" class={labelClasses}>{label}</label>
        {/if}
      </slot>
      <div
        class="{$$props.append !== undefined || $$props.prepend !== undefined || appendIcon !== '' || prependIcon !== '' || group !== '' ? 'input-group' : ''}
        {focused === true ? 'focused' : ''}
        {alternative !== '' ? 'input-group-alternative' : ''}
        {label !== '' || $$props.label !== undefined ? 'has-label' : ''}
        {inputGroupClasses}
        ">
        {#if prependSlot !== undefined}
          <div class="input-group-prepend">
            <span class="input-group-text">
              <slot name="prepend" />
            </span>
          </div>
        {/if}
        {#if prependIcon !== '' || $$props.prepend !== undefined}
          <div class="input-group-prepend">
            <span class="input-group-text">
              <slot name="prepend">
                <i class={prependIcon} />
              </slot>
            </span>
          </div>
        {/if}
        <slot bind={slotData}>
          <input
            {value}
            {id}
            {type}
            {pattern}
            {required}
            {autocomplete}
            {strength}
            on:focus={onFocus}
            on:blur={onBlur}
            on:change={updateValue}
            on:keyup={validateInput}
            bind={attrs}
            {placeholder}
            class="form-control {inputClasses} {(valid) ? 'valid' : 'invalid'}" />
        </slot>
        {#if appendIcon !== '' || $$props.append !== undefined}
          <div class="input-group-append">
            <span class="input-group-text">
              <slot name="append">
                <i class={appendIcon} />
              </slot>
            </span>
          </div>
        {/if}
        {#if appendSlot !== undefined}
          <div class="input-group-append">
            <span class="input-group-text">
              <slot name="append" />
            </span>
          </div>
        {/if}
        <slot name="infoBlock" />
      </div>
      <slot name="success">
        <div class="valid-feedback">
          {#if error === '' && successMessage !== ''}{error}{/if}
        </div>
      </slot>
      {#if strength && !error}
        <slot name="strength">
          <div class="text-muted font-italic" style="min-height: 24px;">
            {#if valueLen > 0}
              <small>
                Strength:
                {#if passwordStrength == "Weak"}
                  <span class="text-danger font-weight-700">Weak</span>
                {/if}
                {#if passwordStrength == "Average"}
                  <span class="text-warning font-weight-700">Average</span>
                {/if}
                {#if passwordStrength == "Strong"}
                  <span class="text-success font-weight-700">Strong</span>
                {/if}
              </small>
            {/if}
          </div>
        </slot>
      {/if}
      <slot name="error">
        <div class={error ? 'invalid-feedback d-block' : ''}>
          {#if error}{error}{/if}
        </div>
      </slot>
    </div>
  </div>
  