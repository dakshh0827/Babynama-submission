# Babynama - Frontend Developer Intern Assignment

Welcome to the Babynama internship assignment! This short project is designed to simulate a real-world task and help us understand your skills and thought process.

**Objective:** Build a small, self-contained feature in Next.js.  
**Time Allotment:** 2-4 hours.

---

### **Part 1: Getting Started & The Task**

1.  **Repository Setup:** You have already created a repository from this template. Now, install the dependencies:
    ```bash
    npm install
    ```
2.  **The User Story:** Your goal is to implement the following feature:
    > "As a busy parent exploring Babynama's resources, I want to see a simple, clear list of upcoming live webinars on a dedicated page so I can quickly see what's available."

3.  **Your Implementation Tasks:**
    * **Create a Page:** Build a new page at the `/webinars` route.
    * **Display Data:** You don't need an API. Create a mock data array directly in your page file. The array should contain at least three webinar objects, each with an `id`, `title`, `speaker` (e.g., "Dr. Sumitra Meena"), and `date`. Render this data as a list of styled cards on the `/webinars` page.
    * **Add Interactivity:** Add a "View Details" button to each card. When clicked, it should log the `id` of that webinar to the browser's console (e.g., `console.log("Viewing details for webinar ID: 3")`).

---

### Part 2: Submission

1. **Live URL:**  
   https://babynama-submission.vercel.app/

2. **Choices Made**
   - **a. Component Architecture:**  
     **Created separate WebinarCard component**  
     - This promotes reusability and a maintainable code structure. Each webinar card contains complex logic for hover states, color theming, and interactive elements that would otherwise clutter the main page component.

   - **b. Styling Approach:**  
     **Chose Tailwind CSS with a blue color palette**  
     - This offers a professional, healthcare-appropriate aesthetic while maintaining visual hierarchy and accessibility standards.

   - **c. State Management:**  
     **Implemented local state with React hooks**  
     - The application's complexity doesn't require external state management libraries, which helps keep the bundle size minimal.

3. **Roadblock & Learning**
   - **a. Challenge:** Dynamic Tailwind Classes Not Rendering.
   - **b. Problem:** Initially used dynamic class generation like `bg-${color}-500` which caused cards to appear blank because Tailwind couldn't compile these classes at build time.
   - **c. Solution:** Refactored to use a `getCardStyles()` function that returns predefined static class names. This ensures Tailwind can detect and compile all necessary classes during the build process.
   - **d. Learning:** Tailwind CSS requires class names to be statically analyzable. Dynamic class generation needs careful consideration of the purging/compilation process.

4. **Screenshot**
   - **a. Desktop View:**  
     ![Desktop View](https://github.com/user-attachments/assets/ca844a9c-5c15-486f-ada4-6413bf5a1fff)

   - **b. Mobile Responsive:**  
     ![Mobile View](https://github.com/user-attachments/assets/a3741a58-0049-459d-b3bb-d20e4ab44314)

**Thank you**



