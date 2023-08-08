<script lang="ts">
  import type { InputField, Interest } from "$lib";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id: string;
  export let required = true;
  export let possibleInterests: Interest[];
  export let interests: InputField<string[]>;

  let visited = false;
  $: isValid = interests.value.length > 0;

  function onChange(event: Event) {
    visited = true;

    const target = event.target as HTMLInputElement;

    const checkboxId = target.id;
    const isChecked = target.checked;
    let updatedInterests = { ...interests };

    if (isChecked) {
      updatedInterests.value.push(checkboxId);
    } else {
      updatedInterests.value.splice(
        updatedInterests.value.indexOf(checkboxId),
        1
      );
    }
    updatedInterests.isValid = isValid;
    dispatch("update:interests", updatedInterests);
  }
</script>

<div class="flex">
  <label for={id}>
    <slot name="label" />
  </label>
  {#if required}
    <p class="ml-1 {isValid ? 'text-inherit' : 'text-red-500'}">*</p>
  {/if}
</div>
<div
  class="flex gap-6 w-fit px-3 py-1 rounded-md text-inherit {isValid ? '' : 'bg-indigo-100 dark:bg-inherit'}"
>
  {#each possibleInterests as item (item.id)}
    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        id={item.id}
        name={item.id}
        checked={interests.value.includes(item.id)}
        on:change={onChange}
        class=" text-inherit dark:text-indigo-800 focus:ring-gray-600"
      />
      <label for={item.id}>{item.title}</label>
    </div>
  {/each}
</div>
{#if $$slots.validation}
  {#if !visited || (visited && isValid)}
    <p class="text-sm italic invisible">x</p>
  {:else}
    <p class="order-3 text-inherit text-sm italic">
      <slot name="validation" />
    </p>
  {/if}
{/if}
