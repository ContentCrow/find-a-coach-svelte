<script lang="ts">
  import type { InputField } from "$lib";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let type: string;
  export let required = false;
  export let minlength = 3;
  export let maxlength: number;
  export let min: number;
  export let max: number;
  export let cols: number;
  export let rows: number;
  export let inputField: InputField<string>;

  let visited = false;

  function onBlur(_: Event) {
    visited = true;
  }

  function onChange(event: Event) {
    let updatedInputField = { ...inputField };
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    updatedInputField.value = target.value;
    updatedInputField.isValid = target.checkValidity();

    dispatch("update:inputField", updatedInputField);
  }
</script>

{#if type == "textarea"}
  <textarea
    id={inputField.id}
    name={inputField.id}
    {required}
    {minlength}
    {maxlength}
    {cols}
    {rows}
    on:blur|once={onBlur}
    on:change={onChange}
    bind:value={inputField.value}
    class="peer order-2 px-2 py-1font-medium text-base text-black dark:text-slate-300 dark:bg-slate-500 outline-none rounded-md border border-gray-600 focus:ring-indigo-800 dark:focus:ring-slate-300 dark:focus:border-slate-300"
  />
{:else}
  <input
    {type}
    id={inputField.id}
    name={inputField.id}
    {required}
    {minlength}
    {maxlength}
    {min}
    {max}
    on:blur|once={onBlur}
    on:change={onChange}
    value={inputField.value}
    class="peer order-2 px-2 py-1 font-medium text-base dark:bg-slate-500 text-black dark:text-slate-300 outline-none rounded-md border-2 border-gray-600 focus:ring-indigo-800 focus:border-indigo-800 dark:focus:ring-slate-300 dark:focus:border-slate-300"
  />
{/if}
<!-- autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(203,213,225)] -->

{#if visited}
  <p class="order-3 text-sm italic invisible">x</p>
{:else}
  <p class="order-3 invisible peer-invalid:visible text-inherit text-sm italic">
    <slot name="validation" />
  </p>
{/if}
<div class="order-1 flex peer-invalid:[&>p]:text-red-400">
  <label for={inputField.id}>
    <slot name="label" />
  </label>
  {#if required}
    <p class="ml-1">*</p>
  {/if}
</div>

<style scoped>
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px rgb(100 116 139 / var(--tw-bg-opacity))
      inset;
    -moz-box-shadow: 0 0 0 100px rgb(100 116 139 / var(--tw-bg-opacity)) inset;
    box-shadow: 0 0 0 100px rgb(100 116 139 / var(--tw-bg-opacity)) inset;
    -webkit-text-fill-color: rgb(203 213 225 / var(--tw-bg-opacity));
  }
</style>
