import { getFaqs } from "./firestore.js"

const faqContainer = document.querySelector(".accordion");
let index = 1;
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getFaqs();

    let faqsArr = [];
    faqsArr = querySnapshot.docs.map((doc) => doc.data());
    showFaqs(faqsArr);
})

function showFaqs(recipes) {
    let html = "";
    
    recipes.forEach((faq) => {
        const faqId = 'faq' + index;
        html += `
        <div class="card">
        <div class="card-header" id="${faqId}Heading">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${faq.question}
            </button>
          </h2>
        </div>
        <div id="collapse${index}" class="collapse" aria-labelledby="${faqId}Heading" data-parent="#faqAccordion">
          <div class="card-body">
            ${faq.answer}
          </div>
        </div>
      </div>
      `;

      index++;
    });

    faqContainer.innerHTML = html;
}

