
<script lang="ts">
  const faqs = [
    {
      question: 'What is HR Connect?',
      answer: 'HR Connect is an internal HR management system for employee records, leave, attendance, and HR services.'
    },
    {
      question: 'Who can use HR Connect?',
      answer: 'Employees, managers, HR officers, and administrators, based on their assigned roles.'
    },
    {
      question: 'How can I request leave?',
      answer: 'Employees will be able to submit and track leave requests through their dashboard.'
    },
    {
      question: 'Can I view my attendance?',
      answer: 'The system is designed to provide authorized employees with access to their attendance records.'
    },
    {
      question: 'How do I sign in?',
      answer: 'Through the Login page using a company account. Authentication is currently under development.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Secure authentication and role-based access are planned. The current prototype uses synthetic data.'
    }
  ];
</script>
<section class="bg-[#FFF8F3] px-6 py-20 dark:bg-slate-900">
  <div class="mx-auto max-w-3xl">
    <h2 class="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-white">
      Frequently Asked Questions
    </h2>
    <div class="space-y-4">
      {#each faqs as faq}
        <details class="group rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-800 dark:text-white">
            {faq.question}
            <span class="text-[#C65D32] group-open:rotate-45">+</span>
          </summary>
          <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {faq.answer}
          </p>
        </details>
      {/each}
    </div>
  </div>
</section>
