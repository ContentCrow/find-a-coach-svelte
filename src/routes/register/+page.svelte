<script lang="ts">
  import TextInputElement from "$lib/TextInputElement.svelte";
  import CheckboxInputElement from "$lib/CheckboxInputElement.svelte";
  import RoundedButton from "$lib/RoundedButton.svelte";
  import { defaultInputFields } from "$lib";

  let submitted = false;
  let inputFields = { ...defaultInputFields };
  $: canSubmit = Object.values(inputFields).every((item) => item.isValid);

  function onSubmit(_: Event) {
    if (!canSubmit) return;

    let coach = {};
    const inputFieldsArr = Object.values(inputFields);
    /*
    const possibleInterests = this.coachesStore.getInterestsWCheck;

    inputFieldsArr.forEach(({ id, value }) => {
      if (id == "interests") {
        let interests = [...value];
        coach = { ...coach, interests: interests };
      } else {
        coach = { ...coach, [id]: value };
      }
    });
    this.coachesStore.registerCoach(coach);
    // this.inputFields = defaultInputFields;
    */
    submitted = true;
  }
</script>

<div class="flex flex-col items-center p-4">
  <h1
    class="mb-10 self-start font-bold text-2xl text-indigo-800 dark:text-slate-300 select-none"
  >
    Register as a coach!
  </h1>
  {#if !submitted}
    <form
      class="list-none w-11/12 grid gap-x-10 gap-y-6 grid-cols-2 row-auto font-semibold text-lg text-indigo-800 dark:text-slate-300"
    >
      <div class="flex flex-col gap-2">
        <TextInputElement
          type={"text"}
          required={true}
          minlength={3}
          maxlength={16}
          bind:inputField={inputFields.firstname}
        >
          <template slot="label">Firstname</template>
          <template slot="validation"
            >Please provide a valid firstname.</template
          >
        </TextInputElement>
      </div>
      <div class="flex flex-col gap-2">
        <TextInputElement
          type="text"
          required="true"
          minlength="3"
          maxlength="16"
          v-model:inputField="inputFields.lastname"
        >
          <template slot="label">Lastname</template>
          <template slot="validation">Please provide a valid lastname.</template
          >
        </TextInputElement>
      </div>
      <div class="flex flex-col gap-2">
        <TextInputElement
          type="number"
          required="true"
          min="20"
          max="199"
          v-model:inputField="inputFields.rate"
        >
          <template slot="label">Hourly Rate</template>
          <template slot="validation"
            >Please provide a valid hourly rate.</template
          >
        </TextInputElement>
      </div>
      <div class="flex flex-col gap-2">
        <TextInputElement
          type="email"
          required="true"
          v-model:inputField="inputFields.email"
        >
          <template slot="label">Email</template>
          <template slot="validation"
            >Please provide a valid email address.</template
          >
        </TextInputElement>
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <CheckboxInputElement
          id="interests"
          :required="true"
          :possibleInterests="this.coachesStore.getInterestsWCheck"
          v-model:interests="inputFields.interests"
        >
          <template slot="label">Interests</template>
          <template slot="validation"
            >Please provide at least one interest.</template
          >
        </CheckboxInputElement>
      </div>
      <div class="flex flex-col gap-2 col-span-2 row-span-2">
        <TextInputElement
          type="textarea"
          required="true"
          cols="20"
          rows="5"
          minlength="20"
          maxlength="200"
          v-model:inputField="inputFields.description"
        >
          <template slot="label">Description</template>
          <template slot="validation"
            >Please provide at least a short description.</template
          >
        </TextInputElement>
      </div>
      <RoundedButton
        disabled={!canSubmit}
        on:click={onSubmit}
        class="w-2/5 h-full"
      >
        Register
      </RoundedButton>
    </form>
  {:else}
    <div>
      <p class="font-bold text-xl italic text-indigo-800">
        Thank you for registering {inputFields.firstname.value.length > 0
          ? inputFields.firstname.value
          : "stranger"}.
      </p>
    </div>
  {/if}
</div>
