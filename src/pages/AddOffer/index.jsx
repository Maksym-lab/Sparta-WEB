import React from 'react';
import { MdWork, MdCloudUpload, MdInfoOutline, MdAddCircle } from 'react-icons/md';
import BannerTitle from '../../assets/images/BannerTitle.jpg';
import { Main, Hero, FileUploader, Form, Reference, Characteristics, Button, Section } from './styles';
import Badge from '../../components/Badge';
const AddOffer = () => {
  return (
    <Main>
      <Hero>
        <img src={BannerTitle} alt="" />
        <Badge icon={MdWork} message="My offers" />
      </Hero>
      <Section>
        <FileUploader>
          <h5>Upload files</h5>
          <MdCloudUpload />
          <input type="file" data-title="drag & drop or browse files to upload!" />
        </FileUploader>
        <Form>
          <label htmlFor="title">
            Title:
            <MdInfoOutline />
          </label>
          <input type="text" id="title" name="title" placeholder="I create a title that describes why they should stay with you" />
          <label htmlFor="description">
            Description:
            <MdInfoOutline />
          </label>
          <textarea rows="7" id="description" placeholder="I create a title that describes why they should stay with you" />
          <label htmlFor="availability">
            Availability:
            <MdInfoOutline />
          </label>
          <input type="date" id="availability" name="availability" />
          <label htmlFor="Location">
            Location:
            <MdInfoOutline />
          </label>
          <input type="text" id="ubication" name="ubication" placeholder="Write your home address..." />
          <label htmlFor="references">
            References:
            <MdInfoOutline />
          </label>
          <Reference>
            <select id="references" name="references" defaultValue="none">
              <option value="none">Select</option>
              <option value="university">University</option>
              <option value="school">School</option>
              <option value="Church">Church</option>
              <option value="GassStation">Gass station</option>
            </select>
            <input type="text" placeholder="Name" />
            <MdAddCircle />
          </Reference>
          <label htmlFor="characteristics">
            Characteristics:
            <MdInfoOutline />
          </label>
          <Characteristics>
            <li>
              <input type="checkbox" />
              Rooms
            </li>
            <li>
              <input type="checkbox" />
              Badrooms
            </li>
            <li>
              <input type="checkbox" />
              Kitchens
            </li>
            <li>
              <input type="checkbox" />
              Roomies
            </li>
            <li>
              <input type="checkbox" />
              Parking
            </li>
            <li>
              <input type="checkbox" />
              Washing Machine
            </li>
            <li>
              <input type="checkbox" />
              Wifi
            </li>
            <li>
              <input type="checkbox" />
              Private Bathroom
            </li>
            <li>
              <input type="checkbox" />
              Closet
            </li>
            <li>
              <input type="checkbox" />
              Metters
            </li>
            <li>
              <input type="checkbox" />
              TV
            </li>
          </Characteristics>
          <label htmlFor="roomCharacteristics">
            The room:
            <MdInfoOutline />
          </label>
          <Characteristics>
            <li>
              <input type="checkbox" />
              Private badroom
            </li>
            <li>
              <input type="checkbox" />
              Closet
            </li>
            <li>
              <input type="checkbox" />
              TV
            </li>
            <li>
              <input type="checkbox" />
              Bead
            </li>
            <li>
              <input type="checkbox" />
              Furnished
            </li>
            <li>
              <input type="checkbox" />
              Desk
            </li>
            <li>
              <input type="checkbox" />
              Square metters
            </li>
          </Characteristics>
          <Button>Save</Button>
        </Form>
      </Section>
    </Main>
  );
};
export default AddOffer;
