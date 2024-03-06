export const EmailTemplate = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => (
  <div>
    <p>
      {name} Se ha registrado en la hackathon del dev, su email es: {email}!
    </p>
  </div>
);
