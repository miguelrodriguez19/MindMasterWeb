import { getFaqs } from "js/firebase.js"

const faqsContainer = document.getElementById("faqAccordion-container");

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getFaqs()

    let html = ''
    querySnapshot.forEach(doc => {
        const faq = doc.data()

        html += `
            <div class="card">
                <div class="card-header" id="${faqId}Heading">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#${faqId}" aria-expanded="false" aria-controls="${faqId}">
                            ${faq.question}
                        </button>
                    </h2>
                </div>
                <div id="${faqId}" class="collapse" aria-labelledby="${faqId}Heading" data-parent="#faqAccordion">
                    <div class="card-body">
                        ${faq.answer}
                    </div>
                </div>
            </div>`;

        faqsContainer.innerHTML = html
    });
})

