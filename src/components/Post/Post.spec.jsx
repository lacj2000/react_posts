import { render, screen } from "@testing-library/react"
import { postPropsMock } from "./mock"
import Post from "."

const props = postPropsMock

describe('<Post />', () => {
    it('should render Post correctly',()=>{
        render(<Post {...props} />);
        expect(screen.getByRole('img',{ src: props.url } ))
          .toHaveProperty('alt', props.title);
        expect(screen.getByRole('heading',{ name: props.title } ))
          .toBeInTheDocument();
        expect(screen.getByText(props.body)).toBeInTheDocument();
        
    });
    it('should match snapshot',()=>{
        const { container } = render(<Post {...props} />);
        expect(container.firstChild).toMatchSnapshot(); 
    });


});