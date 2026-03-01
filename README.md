# NexusGG — Gaming Tournament Sign-up Form
### Angular Material Challenge Activity

A premium gaming tournament registration form built with Angular 21 + Angular Material.

---

## ✅ Requirements Checklist

### Angular Material Components Used

| Component | Module | Purpose |
|-----------|--------|---------|
| `mat-form-field` / `matInput` | `MatFormFieldModule` / `MatInputModule` | Text inputs |
| `mat-radio-group` | `MatRadioModule` | Gender selection |
| `mat-datepicker` | `MatDatepickerModule` | Date of birth |
| `mat-select` | `MatSelectModule` | Game, Rank, Platform dropdowns |
| `mat-chip` | `MatChipsModule` | Role selection |
| `mat-slider` | `MatSliderModule` | Skill level |
| `mat-checkbox` | `MatCheckboxModule` | Terms agreement |
| `mat-icon` | `MatIconModule` | Icons throughout |
| `mat-tooltip` | `MatTooltipModule` | Hover hints |
| `mat-divider` | `MatDividerModule` | Section separators |
| `mat-slide-toggle` ⭐ | `MatSlideToggleModule` | **Dark/Light mode toggle** |
| `mat-progress-bar` ⭐ | `MatProgressBarModule` | **Password strength + slot counter** |
| `mat-badge` ⭐ | `MatBadgeModule` | **Skill level badge indicator** |
| `mat-button` variants | `MatButtonModule` | Submit / Reset buttons |

### Custom Validators
- ✅ **Password**: alphanumeric only, min 8 chars, must start with a letter
- ✅ **Date of Birth**: only accepts users born in 2006 or earlier
- ✅ **Dark/Light Mode Toggle**: `MatSlideToggle` in navbar

---

## 🚀 Setup & Run

```bash
git clone https://github.com/YOUR_USERNAME/angular_mat_challenge.git
cd angular_mat_challenge
npm install
ng serve -o
```

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
ng build
vercel --prod
```

Or connect your GitHub repo at **vercel.com** → Import Project → select `angular_mat_challenge`

Set build command: `ng build`  
Set output directory: `dist/angular-mat-challenge/browser`

---

## 📁 File Structure

```
src/app/
├── signup/
│   ├── signup.ts      ← Logic, validators, form
│   ├── signup.html    ← Template
│   └── signup.css     ← Dark/Light themed styles
└── app.ts             ← Root component
```

---

## 💬 Reflection: Bootstrap vs Tailwind vs Angular Material

**When deciding between Bootstrap, Tailwind CSS, and Angular Material**, each framework serves a distinctly different purpose and audience.

**Bootstrap** is best when you need to ship quickly with minimal configuration. Its pre-built component library and responsive grid system make it ideal for small teams or projects where design consistency is needed out of the box. However, its rigidity can be a drawback — customizing beyond Bootstrap's defaults often requires overriding CSS with higher specificity, leading to messy stylesheets. Its learning curve is low, but the result tends to look generic.

**Tailwind CSS** is at the opposite extreme — it provides no pre-built components, only utility classes. This makes it extremely flexible and highly customizable, but at the cost of a steeper learning curve. Developers must compose their own components from scratch. In a real-world scenario, Tailwind excels for design-heavy projects where branding is critical (like startups or marketing sites), since every pixel is controlled intentionally. Its recent rise in popularity for React/Next.js projects is evidence of this strength.

**Angular Material** is purpose-built for Angular applications, making it the clear winner for enterprise or Angular-based projects. It enforces Google's Material Design system, ensuring accessibility and usability are built in by default. The component library is deeply integrated with Angular's reactive forms, dependency injection, and CDK utilities — features that Bootstrap and Tailwind simply cannot replicate in an Angular context. The trade-off is reduced design freedom; overriding Material styles requires understanding Angular's ViewEncapsulation and `::ng-deep` selectors.

**In a real-world scenario**, I would choose:
- **Angular Material** for enterprise Angular apps needing accessible, consistent, form-heavy UIs
- **Tailwind** for design-forward SPAs and marketing pages needing custom brand identity
- **Bootstrap** for rapid prototypes or simple admin dashboards where speed matters more than design

For this activity specifically, Angular Material was the most effective choice because it integrates natively with Angular's reactive forms, provides powerful form controls (datepicker, slider, select), and handles validation states automatically — significantly reducing development overhead.