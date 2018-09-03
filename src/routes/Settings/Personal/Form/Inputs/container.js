export default Component => (
  () => Component(
    // Function to easily inject all of the necessary props
    (name, label) => ({
      eggshell: 'true',
      label,
      name,
    })
  )
);
