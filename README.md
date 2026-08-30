# Input Label - Custom React Input Component with Labels

A custom input component built with React and CSS. Features floating labels, validation states, and customizable styling.

## Features

- Floating label inputs
- Validation states
- Customizable styling
- Accessibility support
- Keyboard navigation
- Responsive design
- Error/success states

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/input-label.git
   ```

2. Copy `input.tsx` and `global.css` into your project

3. Import and use the component:
   ```tsx
   import Input from './input';

   function App() {
     return (
       <Input
         label="Email"
         type="email"
         placeholder="Enter your email"
       />
     );
   }
   ```

## Usage

### Basic Usage
```tsx
import Input from './input';

function App() {
  const handleChange = (value: string) => {
    console.log('Input value:', value);
  };

  return (
    <Input
      label="Username"
      placeholder="Enter username"
      onChange={handleChange}
    />
  );
}
```

### Different Types
```tsx
<Input label="Password" type="password" />
<Input label="Email" type="email" />
<Input label="Number" type="number" />
<Input label="Phone" type="tel" />
```

### With Validation
```tsx
<Input
  label="Email"
  type="email"
  error="Please enter a valid email"
/>

<Input
  label="Password"
  type="password"
  success="Password is strong"
/>
```

### Custom Styling
```css
/* Override default styles */
.input-container {
  position: relative;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.input-label {
  position: absolute;
  left: 12px;
  top: 12px;
  transition: all 0.2s;
  pointer-events: none;
}

.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  top: -10px;
  left: 8px;
  font-size: 12px;
  background: white;
  padding: 0 4px;
}
```

### Disabled State
```tsx
<Input label="Disabled" disabled />
```

### With Icons
```tsx
<Input
  label="Search"
  prefix={<SearchIcon />}
  placeholder="Search..."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label text |
| type | string | 'text' | Input type |
| placeholder | string | - | Placeholder text |
| value | string | - | Input value |
| onChange | function | - | Change handler |
| error | string | - | Error message |
| success | string | - | Success message |
| disabled | boolean | false | Disabled state |
| prefix | node | - | Prefix icon |
| suffix | node | - | Suffix icon |

## Features in Detail

### Floating Labels
- Labels float above input on focus
- Smooth transition animations
- Always visible for filled inputs

### Validation States
- Error state with red styling
- Success state with green styling
- Custom validation messages

### Accessibility
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
