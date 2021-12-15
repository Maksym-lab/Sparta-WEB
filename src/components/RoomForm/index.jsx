import React, { useState } from 'react';
import {
  MdWork,
  MdCloudUpload,
  MdInfoOutline,
  MdAddCircle,
  MdCloudDone,
  MdClose,
} from 'react-icons/md';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import BannerTitle from '../../assets/images/BannerTitle.jpg';
import {
  Main,
  Hero,
  FileUploader,
  Form,
  Reference,
  ReferencesList,
  Characteristics,
  Button,
  Section,
} from './styles';
import Badge from '../Badge';
import BackButton from '../BackButton';
import useInputValue from '../../hooks/useInputValue';
const GET_FEATURES_PLACES = gql`
  query {
    roomsFeatures {
      id
      name
      icon
      isBoolean
      description
      category {
        id
        name
        description
      }
    }
    roomsPlacesCategories {
      id
      name
      description
    }
  }
`;
const RoomForm = (props) => {
  const { disabled, onSubmit } = props;
  const { data } = useQuery(GET_FEATURES_PLACES);
  const { roomsFeatures = [], roomsPlacesCategories = [] } = data || {};
  const [title, setTitle] = useInputValue('title');
  const [description, setDescription] = useInputValue('description');
  const [availability, setAvailability] = useInputValue('availability');
  const [price, setPrice] = useInputValue(0);
  const [location, setLocation] = useInputValue('location');
  const [reference, setReference] = useInputValue('reference');
  const [referenceDetail, setReferenceDetail] = useInputValue(
    'referenceDetail',
  );
  const [references, setReferences] = useState([]);
  const [houseFeatures, setHouseFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [files, setFiles] = useState({});
  const [filesMessage, setFilesMessage] = useState('No files uploaded');
  const clearInputs = (form) => {
    setTitle('');
    setDescription('');
    setAvailability('');
    setPrice(0);
    setLocation('');
    setReference('');
    setReferenceDetail('');
    setReferences([]);
    setHouseFeatures([]);
    setRoomFeatures([]);
    setFiles({});
    setFilesMessage('No files uploaded');
    form.reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(files).length === 0) {
      alert('You must add a photo in the Upload Files section');
      return;
    }
    if (references.length === 0) {
      alert('You must add a reference in the references section');
      return;
    }
    if (houseFeatures.length === 0) {
      alert('You must add a feature in the Characteristics section');
      return;
    }
    if (roomFeatures.length === 0) {
      alert('You must add a feature reference in the room section');
      return;
    }
    onSubmit({
      title: title.value,
      description: description.value,
      availabilityDate: availability.value,
      price: price.value,
      address: location.value,
      files,
      visibility: true,
      places: references,
      features: [...houseFeatures, ...roomFeatures],
    });
    clearInputs(e.target);
  };
  const handleFile = (e) => {
    const files = Object.values(e.target.files);
    if (files.length > 8) {
      setFilesMessage('Sorry, you can only upload 8 files maximum');
      e.target.value = '';
      setFiles({});
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (!/\.(jpg|jpeg|png)$/.test(files[i].name)) {
        setFilesMessage(
          `File '${files[i].name.substring(
            0,
            18,
          )}...' extension not supported, must be .jpg, .jpeg or .png`,
        );
        e.target.value = '';
        setFiles({});
        return;
      }
      if (files[i].size > 1048577) {
        setFilesMessage(
          `File '${files[i].name.substring(
            0,
            18,
          )}...' is too big! Maximum size 1MB`,
        );
        e.target.value = '';
        setFiles({});
        return;
      }
    }
    setFiles(e.target.files);
  };
  const addReference = () => {
    if (!reference.value || !referenceDetail.value) {
      return;
    }
    setReferences([
      ...references,
      { place: reference.value, details: referenceDetail.value },
    ]);
  };
  const removeReference = (e) => {
    const value = e.target.parentNode.getAttribute('value');
    if (value) {
      setReferences(
        references.filter((reference) => JSON.stringify(reference) !== value),
      );
    }
  };
  const addHouseFeature = (e) => {
    if (e.target.checked) {
      setHouseFeatures([...houseFeatures, { feature: e.target.value }]);
    } else {
      setHouseFeatures(
        houseFeatures.filter((item) => item.feature !== e.target.value),
      );
    }
  };
  const addRoomFeature = (e) => {
    if (e.target.checked) {
      setRoomFeatures([...roomFeatures, { feature: e.target.value }]);
    } else {
      setRoomFeatures(
        roomFeatures.filter((item) => item.feature !== e.target.value),
      );
    }
  };
  return (
    <Main>
      <Hero>
        <img src={BannerTitle} alt="" />
        <Badge icon={MdWork} message="My offers" />
      </Hero>
      <BackButton />
      <Section>
        <FileUploader>
          <h5>Upload files</h5>
          <MdCloudUpload />
          <input
            type="file"
            multiple
            accept=".jpg, .jpeg, .png"
            id="file"
            name="file"
            data-title="drag & drop or browse files to upload!"
            onChange={handleFile}
            required
            disabled={disabled}
          />
          {Object.values(files).length === 0 ? (
            <p>{filesMessage}</p>
          ) : (
            <ul>
              {Object.values(files).map((file) => (
                <li key={file.name}>
                  <MdCloudDone />
                  {file.name.substring(0, 18)}
                </li>
              ))}
            </ul>
          )}
        </FileUploader>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title:
            <MdInfoOutline />
          </label>
          <input
            type="text"
            {...title}
            maxLength={20}
            disabled={disabled}
            placeholder="I create a title that describes why they should stay with you"
            required
          />
          <label htmlFor="description">
            Description:
            <MdInfoOutline />
          </label>
          <textarea
            rows="7"
            {...description}
            maxLength={255}
            disabled={disabled}
            placeholder="I create a title that describes why they should stay with you"
            required
          />
          <label htmlFor="availability">
            Availability:
            <MdInfoOutline />
          </label>
          <input type="date" {...availability} disabled={disabled} />
          <label htmlFor="price">
            Price:
            <MdInfoOutline />
          </label>
          <input
            type="number"
            {...price}
            disabled={disabled}
            required
            min={1}
            max={99999999}
            maxLength={8}
          />
          <label htmlFor="location">
            Location:
            <MdInfoOutline />
          </label>
          <input
            type="text"
            {...location}
            maxLength={25}
            disabled={disabled}
            placeholder="Write your home address..."
            required
          />
          <label htmlFor="references">
            References:
            <MdInfoOutline />
          </label>
          <Reference>
            <select required {...reference} disabled={disabled}>
              <option disabled value="">
                Select
              </option>
              {roomsPlacesCategories.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              {...referenceDetail}
              maxLength={30}
              disabled={disabled}
              placeholder="Name"
              required
            />
            <MdAddCircle onClick={addReference} />
          </Reference>
          {references && (
            <ReferencesList>
              {references.map((reference) => (
                <li key={reference.place} value={JSON.stringify(reference)}>
                  {`${
                    roomsPlacesCategories.filter(
                      (place) => place.id === reference.place,
                    )[0].name
                  }: ${reference.details}`}
                  <MdClose onClick={removeReference} />
                </li>
              ))}
            </ReferencesList>
          )}
          <label htmlFor="characteristics">
            Characteristics:
            <MdInfoOutline />
          </label>
          <Characteristics>
            {roomsFeatures.map((feature) => {
              if (feature.category.id === '1') {
                return (
                  <li key={feature.id}>
                    <input
                      type="checkbox"
                      value={feature.id}
                      onClick={addHouseFeature}
                      disabled={disabled}
                    />
                    {feature.name}
                  </li>
                );
              }
              return '';
            })}
          </Characteristics>
          <label htmlFor="roomCharacteristics">
            The room:
            <MdInfoOutline />
          </label>
          <Characteristics>
            {roomsFeatures.map((feature) => {
              if (feature.category.id === '2') {
                return (
                  <li key={feature.id}>
                    <input
                      type="checkbox"
                      value={feature.id}
                      onClick={addRoomFeature}
                      disabled={disabled}
                    />
                    {feature.name}
                  </li>
                );
              }
              return '';
            })}
          </Characteristics>
          <Button type="submit" disabled={disabled}>
            Save
          </Button>
        </Form>
      </Section>
    </Main>
  );
};
export default RoomForm;
